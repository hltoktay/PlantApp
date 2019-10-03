import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00707e"
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
  },
  box1: {
    marginTop: 100,
    backgroundColor: "#00505a",
    borderTopLeftRadius: 120,
    height: "55%",
    flex: 1,
    flexDirection: "column"
  },
  subName: {
    color: "#d4d4d4",
    paddingBottom: 5,
    paddingLeft: 10
  },
  itemName1: {
    paddingLeft: 40,
    marginTop: 50,
    marginLeft: 25,
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Times New Roman"
  },
  itemNum: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5
  },
  box2: {
    backgroundColor: "#003d45",
    width: "100%",
    height: "55%",
    marginTop: 50,
    borderTopLeftRadius: 120
  },
  itemName2: {
    paddingLeft: 43,
    marginTop: 30,
    marginLeft: 25,
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Times New Roman"
  }
});

export default styles;
