import { Group, Text, type SkFont } from "@shopify/react-native-skia";
import { PieSliceData } from "victory-native";

export const PieChartCustomLabel = ({
  slice,
  font,
  position,
}: {
  slice: PieSliceData;
  font: SkFont | null;
  position: { x: number; y: number };
}) => {
  const { x, y } = position;

  if (!font) return null;

  const fontSize = font.getSize();
  const getLabelWidth = (text: string) =>
    font.getGlyphWidths(font.getGlyphIDs(text)).reduce((sum, width) => sum + width, 0);

  const label = slice.label;
  const value = `${slice.value} UNITS`;

  const isLarge = slice.value > 130;

  const labelWidth = getLabelWidth(label);
  const valueWidth = getLabelWidth(value);

  const lineSpacing = fontSize * 0.2;

  return (
    <Group transform={[{ translateY: -fontSize }]}>
      {/* Nome da Tag */}
      <Text
        x={x - labelWidth / 2}
        y={y}
        text={label}
        font={font}
        color="white"
      />
      
      {/* Valor (count) */}
      <Text
        x={x - valueWidth / 2}
        y={y + fontSize + lineSpacing}
        text={value}
        font={font}
        color={isLarge ? "white" : "white"}
      />
    </Group>
  );
};
