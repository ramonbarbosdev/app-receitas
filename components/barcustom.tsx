import { StyleSheet, View, Text, TextInput } from 'react-native';
import React from 'react';
import { CartesianChart, Bar, useChartPressState } from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';
import { useThemeContext } from '@/src/app/styles/ThemeContext';

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

    const animatedText = useAnimatedProps(() => {
        const val = state?.y?.y?.value?.value ?? 0;
        return {
            text: `Frequência: ${val}`,
            defaultValue: ""
        };
    });

    const xLabels = data.map(d => d.tag);
    const chartData = data.map((item, index) => ({
        x: index,
        y: item.count,
        color: colors[index % colors.length], 
    }));

    const maxCount = Math.max(...chartData.map(d => d.y));

    if (!font) return null;

    const { theme } = useThemeContext();
    const styles = style(theme);

    function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> })
    {
        return <Circle cx={x} cy={y} r={8} color={theme.colors.paragraph_extra} />;
    }

    const barColors = chartData.map((item) => item.color);

  return (
    <View style={styles.container}>
        {/* Título */}
        <View style={styles.legendContainer}>
            <Text style={styles.textinput}>Frequência de Tags</Text>
        </View>

        {/* Gráfico de barras */}
      <CartesianChart
        data={chartData}
        xKey="x"
        yKeys={['y']}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        domain={{ y: [0, maxCount + 2] }}
        chartPressState={state}
        axisOptions={{
          font,
          lineColor: theme.colors.paragraph_extra,
          labelColor: theme.colors.paragraph_extra,
          formatXLabel: (value) => xLabels[value] ?? '',
        }}
      >
         {({ points, chartBounds }) => (
          <>
           
            {chartData.map((item, index) => (
            <Bar
                key={index}
                points={[points.y[index]]}
                chartBounds={chartBounds}
                animate={{ type: 'spring', duration: 500 }}
                color={item.color}
                roundedCorners={{
                topLeft: 5,
                topRight: 5,
                }}
                barWidth={30}
            />
            ))}

            {isActive && <ToolTip x={state.x.position} y={state.y.y.position} />}
          </>
        )}
      </CartesianChart>

      {/* Legenda */}
      <View style={styles.legendContainer}>
              { isActive ?
                <View style={styles.legendItem}>
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

const style = (theme: any) => StyleSheet.create({
  container: {
    height: 380,
    width: '100%',
    backgroundColor: theme.colors.card,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  legendContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',

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
    color: theme.colors.paragraph_extra,
  },
   textinput:
    {
        fontSize:20,
        fontWeight: "bold",
        color: theme.colors.paragraph_extra
    }

});
