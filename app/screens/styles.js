import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003d45"
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
  profileBtn: {
    left: "35%",
    top: 0,
    marginTop: 30
  }
});

export default styles;
