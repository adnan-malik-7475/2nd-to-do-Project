import React from 'react'
import { Navbar } from '../../components/sidebar';
export const Task = () => {
  return (
    <div className="flex">
      <Navbar />


      <div className=" justify-center items-center  ">
        <div className="ml-12 mt-12 font-bold"> <button> + Check In</button>
          <h3 className="mt-4 mb-0 font-semibold">Current Location</h3>
        </div>
        <table class="table-auto  ml-12 ">

          <tbody>
            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Pustegränd, Stockholm, SE </h6>


              </td>
              <p className="text-xs ml-12">59.3293° N, 18.0686° E</p>

            </tr>

            <h3 className=" mt-2 mb-0 font-semibold ml-4">Previous Location</h3>

            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Halsingegätan, Stockholm, SE</h6>


              </td>
              <p className="text-xs ml-12">59.3293° N, 18.0686° E</p>

            </tr>
            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Pustegränd, Stockholm, SE</h6>


              </td>
              <p className="text-xs ml-12">59.3293° N, 18.0686° E</p>

            </tr>
            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Långa Gatan, Stockholm, SE</h6>


              </td>
              <p className="text-xs ml-12">59.3293° N, 18.0686° E</p>

            </tr>
            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Djurgården, Stockholm, SE</h6>


              </td>
              <p className="text-xs ml-12">59.3293° N, 18.0686° E</p>

            </tr>
            <tr>
              <td class="border-none font-normal pt-4 flex ">
                📍 <h6 className="ml-4">Svartensgatan, Stockholm, SE</h6>


              </td>
              <p className="text-xs ml-12">559.3293° N, 18.0686° E</p>

            </tr>




          </tbody>
        </table>
      </div>

    </div>


  );
}
