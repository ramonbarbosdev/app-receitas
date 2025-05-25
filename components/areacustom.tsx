import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Area, CartesianChart, getTransformComponents, Pie, PolarChart, setScale, setTranslate, useChartTransformState } from 'victory-native'
import { useThemeContext } from '@/src/app/styles/ThemeContext';
import { useFont } from '@shopify/react-native-skia';
import { PieChartCustomLabel } from './piechartcustomlabel';
import { useAnimatedReaction, useSharedValue, withTiming } from 'react-native-reanimated';

type Props = {
  data: { tag: string; count: number }[];
};



const AreaCustom = ({data}: Props) => {

    const { theme } = useThemeContext();
    const styles = style(theme);
    const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'), 12);
    
    const chartData = data.map((item, index) => ({
            label: item.tag,          
            value: item.count,        
            color: generateRandomColor(), 
        }));

    const [insetWidth, setInsetWidth] = useState(4);
    const [insetColor, setInsetColor] = useState<string>(theme.colors.card);
    const { state } = useChartTransformState();

    const k = useSharedValue(1);
    const tx = useSharedValue(0);
    const ty = useSharedValue(0);


      useAnimatedReaction(
    () => {
      return state.panActive.value || state.zoomActive.value;
    },
    (cv, pv) => {
      if (!cv && pv) {
        const vals = getTransformComponents(state.matrix.value);
        k.value = vals.scaleX;
        tx.value = vals.translateX;
        ty.value = vals.translateY;

        k.value = withTiming(1);
        tx.value = withTiming(0);
        ty.value = withTiming(0);
      }
    },
  );

    useAnimatedReaction(
    () => {
      return { k: k.value, tx: tx.value, ty: ty.value };
    },
    ({ k, tx, ty }) => {
      const m = setTranslate(state.matrix.value, tx, ty);
      state.matrix.value = setScale(m, k);
    },
  );



  return (
    <View style={styles.container}>
     <PolarChart
        transformState={state}
        data={chartData}
        labelKey={"label"}
        valueKey={"value"} 
        colorKey={"color"} 
        
      >
         <Pie.Chart>
              {({ slice }) => {
                return (
                  <>
                    <Pie.Slice>

                      {/* <Pie.Label font={font} color={theme.colors.button_text} /> */}

                    <Pie.Label radiusOffset={0.6}>
                        {(position) => (
                            <PieChartCustomLabel
                            position={position}
                            slice={slice}
                            font={font}
                            />
                        )}
                        </Pie.Label>
                    </Pie.Slice>

                    <Pie.SliceAngularInset
                      angularInset={{
                        angularStrokeWidth: insetWidth,
                        angularStrokeColor: insetColor,
                      }}
                    />
                  </>
                );
              }}
            </Pie.Chart>
      </PolarChart>
    </View>
  )
}

function randomNumber() {
  return Math.floor(Math.random() * 26) + 125;
}
function generateRandomColor(): string {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;
}

const DATA = (numberPoints = 5) =>
  Array.from({ length: numberPoints }, (_, index) => ({
    value: randomNumber(),
    color: generateRandomColor(),
    label: `Label ${index + 1}`,
  }));

export default AreaCustom;

const style = (theme: any) => StyleSheet.create({
  container: {
    height: 380,
    width: '100%',
    backgroundColor: theme.colors.card,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },


})