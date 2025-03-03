import { Link, useParams } from "react-router-dom";

export default function CategoryView() {

  //const params = useParams()

  //const categoryId = params.categoryId

  
  return (
    <>
      <h1 className="text-center text-secundario text-3xl font-bold mt-10">Sala</h1>
      
      <div className="flex justify-center gap-2 text-secundario font-bold text-xl mt-2 border-b-4 pb-6 mb-28">
        <Link to={'/'} className="">Inicio</Link>
        <p>&gt;</p>
        <Link to={'/sala'} className="">Sala</Link>
      </div>

      <main className="w-[95%] mx-auto space-y-28 mb-28">
        <section className="flex justify-around items-center">
          <div className="bg-amarillo inline-block">
            <img src="/cama.jpeg" alt="cama" className="w-[450px] h-[400px] py-10 translate-x-11"  />
          </div>
          <div className="bg-amarillo-oscuro h-[75%]">
            <div className="bg-amarillo h-full translate-5">
              <div className="p-10 flex flex-col items-center">
                <h3 className="text-center font-bold text-2xl">Mesas de Centro</h3>
                <p className="w-[350px] my-10 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quis quo officiis consequatur excepturi omnis? Fugit unde et nulla, odit pariatur, quo rem illo voluptate debitis corporis quod odio. Nam!</p>
                <Link to={'/#'} className="bg-white p-5 border-4 border-amarillo-claro text-lg font-bold text-center" >Ver Mesas de Centro</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-around items-center">

          <div className="bg-amarillo inline-block">
            <img src="/cama.jpeg" alt="cama" className="w-[450px] h-[400px] py-10 translate-x-11"  />
          </div>

          <div className="bg-amarillo-oscuro h-[75%]">
            <div className="bg-amarillo h-full translate-5">
              <div className="p-10 flex flex-col items-center">
                <h3 className="text-center font-bold text-2xl">Mesas de Centro</h3>
                <p className="w-[350px] my-10 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quis quo officiis consequatur excepturi omnis? Fugit unde et nulla, odit pariatur, quo rem illo voluptate debitis corporis quod odio. Nam!</p>
                <Link to={'/#'} className="bg-white p-5 border-4 border-amarillo-claro text-lg font-bold text-center" >Ver Mesas de Centro</Link>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  )
}

