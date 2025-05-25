import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { CartesianChart, Bar } from 'victory-native';
import { useFont } from '@shopify/react-native-skia';

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

const BarCustom = ({ data }: Props) => {
  const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);

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
        {chartData.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[styles.colorBox, { backgroundColor: item.color }]}
            />
            <Text style={styles.legendText}>{item.x !== undefined ? xLabels[item.x] : ''}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BarCustom;

const styles = StyleSheet.create({
  container: {
    height: 380, // aumentei um pouco pra caber legenda
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  legendContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap', // permite quebrar linha se precisar
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
});
