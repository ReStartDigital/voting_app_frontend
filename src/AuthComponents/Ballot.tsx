import React from 'react';
import Title from "../Reusable/Title";

const Ballot:React.FunctionComponent = () => {

    return (
    <section className='w-full h-screen flex justify-start items-start flex-col'>
      <Title title={"Ballot"} icon={"M12 10h5V8h-5zm0 6h5v-2h-5zm-3-5q.825 0 1.413-.587T11 9t-.587-1.412T9 7t-1.412.588T7 9t.588 1.413T9 11m0 6q.825 0 1.413-.587T11 15t-.587-1.412T9 13t-1.412.588T7 15t.588 1.413T9 17m-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"}/>
        <span className="font-kanit text-4xl">Updates will be available soon.</span>
    </section>
  );
}

export default Ballot;
