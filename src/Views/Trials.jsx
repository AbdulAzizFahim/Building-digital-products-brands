import Trial from "../components/Trial/Trial";

const data = {
  title: "Start your free trial today",
  des: "Try Landwind Platform for 30 days. No credit card required.",
  buttonDes: "Free trial for 30 days",
};

export default function Trials() {
  return <Trial data={data} />;
}
