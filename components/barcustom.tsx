import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CartesianChart, Bar } from 'victory-native';
import { useFont } from '@shopify/react-native-skia';

type Props = {
  data: { tag: string; count: number }[];
};

const BarCustom = ({ data }: Props) => {
  const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);

  // Mapear tags para índices numéricos
  const xLabels = data.map(d => d.tag);

  // Criar dados com x = índice, y = count
  const chartData = data.map((d, i) => ({
    x: i,
    y: d.count,
  }));

  if (!font) {
    // Espera a fonte carregar para renderizar o gráfico corretamente
    return null;
  }

  return (
    <View style={{ height: 300 }}>
      <CartesianChart
        data={chartData}
        xKey="x"
        yKeys={['y']}
        domainPadding={{ top: 10, bottom: 10 }}
        axisOptions={{
          font,
          
        }}
      >
        {({ points, chartBounds  }) => (
          <Bar
             points={points.y}
            chartBounds={chartBounds}
            color="red"
            roundedCorners={{ topLeft: 10, topRight: 10 }}
          />
        )}
      </CartesianChart>
    </View>
  );
};

export default BarCustom;

const styles = StyleSheet.create({});
