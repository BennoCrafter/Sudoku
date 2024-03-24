import { React, useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Board } from "./logic/Board";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [selectedCell, setSelectedCell] = useState([]);
	const [board, setBoard] = useState(new Board());
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
	board.setValue(0, 1, 1);

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
		return board.values.map((row, rowIndex) => (
			<View key={rowIndex} style={styles.row}>
				{row.map((colum, columIndex) => (
					<TouchableOpacity
						key={`${rowIndex}-${columIndex}`}
						style={[
							styles.cell,
							selectedCell[0] === rowIndex &&
							selectedCell[1] === columIndex
								? styles.selectedCellStyle
								: null,
						]}
						onPress={() => setSelectedCell([rowIndex, columIndex])}
					>
						<Text style={styles.cellItem}>
							{!board.isEmpty(rowIndex, columIndex)
								? board.getValue(rowIndex, columIndex)
								: ""}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		));
	};

	const renderNumbers = () => {
		const numbers = [];
		for (let i = 1; i <= 9; i++) {
			numbers.push(
				<TouchableOpacity
					key={i}
					style={styles.numberButton}
					onPress={() => {
						board.setValue(selectedCell[0], selectedCell[1], i);
            forceUpdate()
					}}
				>
					<Text style={styles.numberText}>{i}</Text>
				</TouchableOpacity>
			);
		}
		return numbers;
	};

	return (
		<View style={styles.container}>
			{/* Sudoku Grid */}
			<View style={styles.grid}>{renderSudokuGrid()}</View>
			<View style={styles.numberSelector}>{renderNumbers()}</View>
		</View>
	);
}

// Function to render the Sudoku grid

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5",
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
		fontFamily: "roboto",
	},
	selectedCellStyle: {
		borderColor: "blue",
		borderWidth: 3,
	},
	numberSelector: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		marginTop: 20,
	},
	numberButton: {
		backgroundColor: "#D4CBCE",
		padding: 10,
		borderRadius: 5,
		marginRight: "1%",
	},
	numberText: {
		fontSize: 18,
		fontWeight: "bold",
		fontFamily: "roboto",
	},
});
