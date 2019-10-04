import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "#fff",
    fontWeight: "800",
    top: "20%",
    left: "10%",
    fontSize: 26,
    letterSpacing: 2,
    fontFamily: "Times New Roman"
  },
  subTitle: {
    color: "#fff",
    fontWeight: "200",
    top: "20%",
    left: "12%",
    fontSize: 14,
    paddingTop: 5,
    fontFamily: "Times New Roman"
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
