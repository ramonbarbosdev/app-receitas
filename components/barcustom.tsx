import { StyleSheet, View, Text, TextInput } from 'react-native';
import React from 'react';
import { CartesianChart, Bar, useChartPressState } from 'victory-native';
import { useFont } from '@shopify/react-native-skia';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

type Props = {
  data: { tag: string; count: number }[];
};

const colors = [
  '#E63946', // vermelho
  '#457B9D', // azul
  '#2A9D8F', // verde
  '#F4A261', // laranja
  '#E76F51', // outro tom
];

Animated.addWhitelistedNativeProps({text: true})
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const BarCustom = ({ data }: Props) => {
    const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);
    const { state, isActive} = useChartPressState<{ x: number; y: Record<"y", number> }>({ x: 0, y: { y: 0 } });

     const animatedText =  useAnimatedProps( () => {
        return{
        text: `Contagem: ${state.y.y.value.value}`,
            defaultValue: ""
        }
    }) 

  const xLabels = data.map(d => d.tag);
  const chartData = data.map((item, index) => ({
    x: index,
    y: item.count,
    color: colors[index % colors.length], 
  }));

  const maxCount = Math.max(...chartData.map(d => d.y));

  if (!font) return null;

  return (
    <View style={styles.container}>
      <CartesianChart
        data={chartData}
        xKey="x"
        yKeys={['y']}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        domain={{ y: [0, maxCount + 2] }}
        chartPressState={state}

        axisOptions={{
          font,
          formatXLabel: (value) => xLabels[value] ?? '',
        }}
      >
        {({ points, chartBounds }) => (
          <Bar
            animate={{type: "spring", duration: 500}}
            points={points.y}
            chartBounds={chartBounds}
            color={''} 
            roundedCorners={{
              topLeft: 5,
              topRight: 5,
            }}
            
          />
        )}
      </CartesianChart>

      {/* Legenda */}
      <View style={styles.legendContainer}>
              { isActive ?
                <View>
                    <AnimatedTextInput
                        editable={false}
                        underlineColorAndroid={"transparent"}
                        style={styles.legendText}
                        animatedProps={animatedText}
                    >
                    </AnimatedTextInput>
                    
                </View>
                :
                chartData.map((item, index) => (
                    <View key={index} style={styles.legendItem}>
                        <View
                        style={[styles.colorBox, { backgroundColor: item.color }]}
                        />
                        <Text style={styles.legendText}>{item.x !== undefined ? xLabels[item.x] : ''}</Text>
                    </View>
                    ))
        }
      </View>
    
    </View>
  );
};

export default BarCustom;

const styles = StyleSheet.create({
  container: {
    height: 380,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  legendContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 8,
  },
  colorBox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: '#333',
  },
   textinput:
    {
        fontSize:30,
        fontWeight: "bold",
        color: "#000",
    }

});
