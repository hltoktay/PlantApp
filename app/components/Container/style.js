import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: "#d1d1d1",
    fontSize: 20,
    top: "67%",
    left: "12%",
    fontWeight: "400",
    fontFamily: "Times New Roman"
  },
  content: {
    color: "#fff",
    paddingTop: 10,
    fontSize: 26,
    top: "67%",
    left: "12%",
    width: "35%",
    fontWeight: "800",
    fontFamily: "TimesNewRomanPSMT"
  },
  skipButton: {
    alignItems: "center",
    marginRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    width: "25%",
    fontWeight: "600",
    borderRadius: 10
  },
  startButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#003d45",
    width: "40%",
    height: 50,
    borderRadius: 10
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "TimesNewRomanPSMT",
    fontWeight: "600"
  },
  bgColor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "15%",
    backgroundColor: "#001d20",
    borderTopLeftRadius: 150
  }
});

export default styles;
