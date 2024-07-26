// import { Wheel } from "react-custom-roulette";
import ComingSoon from "/comingsoon.png";
type Props = {};

const WheelPage = ({}: Props) => {
  // const data = [
  //   { option: "0" },
  //   { option: "1" },
  //   { option: "2" },
  //   { option: "3" },
  //   { option: "4" },
  //   { option: "5" },
  //   { option: "6" },
  //   { option: "7" },
  //   { option: "8" },
  //   { option: "9" },
  //   { option: "10" },
  // ];

  // const [mustSpin, setMustSpin] = useState(false);
  // const [prizeNumber, setPrizeNumber] = useState(0);

  // const handleSpinClick = () => {
  //   const newPrizeNumber = Math.floor(Math.random() * data.length);
  //   setPrizeNumber(newPrizeNumber);
  //   setMustSpin(true);
  // };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      {/* <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
        backgroundColors={["#FF204B", "#2196F3", "#FD881F"]}
      />
      <button onClick={handleSpinClick}>SPIN</button> */}
      <img src={ComingSoon} className="w-10/12" />
      <h1 className="text-4xl font-bold">Coming Soon...</h1>
    </div>
  );
};

export { WheelPage };
