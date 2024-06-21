import ServiceCard from "../components/ServiceCard";
import PulseIcon from "../assets/icons/pulse.png";
import SquareIcon from "../assets/icons/square.png";
import CalendarIcon from "../assets/icons/calendar.png";
import CommentIcon from "../assets/icons/comment.png";
import DrawingIcon from "../assets/icons/drawing.png";
import FeedsIcon from "../assets/icons/feeds.png";

const Services = () => {
  return (
    <div className="md:mt-20 mt-10 md:mx-32 mx-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold after:border-b-2 after:border-blue-500 text-center">
        Services
      </h1>
      <div className="mt-4 border-b-4 border-blue-500 w-14 " />
      <p className="text-gray-700 md:mt-10 mt-8">
        His needs result from something he wants to escape from
      </p>
      <div className="flex flex-wrap md:gap-6 gap-4 md:mt-16 mt-12 w-full">
        <ServiceCard
          Icon={PulseIcon}
          Title="Nesciunt Mete"
          Description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
        />
        <ServiceCard
          Icon={FeedsIcon}
          Title="Eosle Commodi"
          Description="
Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        />
        <ServiceCard
          Icon={DrawingIcon}
          Title="Ledo Markt"
          Description="
Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
        />
        <ServiceCard
          Icon={SquareIcon}
          Title="Asperiores Commodit
"
          Description="
Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.

"
        />
        <ServiceCard
          Icon={CalendarIcon}
          Title="Velit Doloremque


"
          Description="Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."
        />
        <ServiceCard
          Icon={CommentIcon}
          Title="Dolori Architecto


"
          Description="Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
        />
      </div>
    </div>
  );
};

export default Services;
