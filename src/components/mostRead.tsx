import { IMostRead } from "../types/types";

interface IMostReadProps {
  art: IMostRead;
  index: number;
}

const MostRead = (props: IMostReadProps) => {
  return (
    <section className="flex py-7">
      <div>
        <img
          className="h-[200px] w-[150px] min-w-[150px]"
          src={props.art.imageSrc}
          alt=""
        />
      </div>
      <div className="px-4">
        <h1 className="text-[30px] text-GrayishBlue font-bold">
          {props.index + 1}
        </h1>
        <h2 className="font-bold text-[20px] text-VeryDarkBlue hover:text-SoftOrange cursor-pointer">
          {props.art.title}
        </h2>
        <p className="text-GrayishBlue">{props.art.desc}</p>
      </div>
    </section>
  );
};

export default MostRead;
