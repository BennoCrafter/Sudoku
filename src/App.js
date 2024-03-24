import {React, useCallback, useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
SplashScreen.preventAutoHideAsync();
const sudokuValues = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];
export default function App() {
const [selectedCell, setSelectedCell] = useState([])

  const [fontsLoaded, fontError] = useFonts({
    roboto: require("../assets/Roboto-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderSudokuGrid = () => {
    return sudokuValues.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((colum, columIndex) => (
          <TouchableOpacity
            key={`${rowIndex}-${columIndex}`}
            style={[styles.cell, (selectedCell[0] === rowIndex && selectedCell[1] === columIndex) ? styles.selectedCellStyle : null]}
            onPress={() => setSelectedCell([rowIndex, columIndex])}
          >
            <Text style={styles.cellItem}>{colum || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };
  

  return (
    <View style={styles.container}>

      {/* Sudoku Grid */}
      <View style={styles.grid}>{renderSudokuGrid()}</View>
    </View>
  );
}

// Function to render the Sudoku grid


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    borderWidth: 1,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",

    alignItems: "center",
    justifyContent: "center",
  },
  cellItem: {
    fontSize: 20,
    fontFamily: "roboto"
  },
  selectedCellStyle: {
    borderColor: "blue",
    borderWidth: 3
  }
});
