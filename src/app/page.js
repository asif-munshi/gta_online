import Profile from "@/components/Profile/Profile";
import Footer from "@/components/Footer/Footer";

import Card from "@/components/Card/Card";
import SliderCard from "@/components/Card/SliderCard";

import munshidb from "../lib/munshidb.json";
import {
  //phase-1
  Agency,
  Apartments,
  ArenaWorkshop,
  AutoShop,
  Bunker,
  //phase-2
  CargoWarehouse,
  CasinoPenthouse,
  ExecutiveOffice,
  ExecutiveOfficeGarages,
  Facility,
  //phase-3
  Garage,
  Hangar,
  LargeVehicles,
  MCBusinesses,
  MCClubhouse,
  //phase-4
  Nightclub,
  RetroArcade,
  VehicleWarehouse,
  Yacht,
} from "../lib/getData";
import ListBox from "@/components/List/Listbox";

export default function Home() {
  //phase-1
  const agency = munshidb.find(Agency);
  const apartments = munshidb.filter(Apartments);
  const arena = munshidb.find(ArenaWorkshop);
  const auto = munshidb.find(AutoShop);
  const bunker = munshidb.find(Bunker);
  //phase-2
  const cargo = munshidb.find(CargoWarehouse);
  const casino = munshidb.find(CasinoPenthouse);
  const execoffice = munshidb.find(ExecutiveOffice);
  const execOffGarages = munshidb.filter(ExecutiveOfficeGarages);
  const facility = munshidb.find(Facility);
  //phase-3
  const garage = munshidb.find(Garage);
  const hangar = munshidb.find(Hangar);
  const largeVehicles = munshidb.filter(LargeVehicles);
  const clubhouse = munshidb.find(MCClubhouse);
  const mcBusinesses = munshidb.filter(MCBusinesses);
  //phase-4
  const nightclub = munshidb.find(Nightclub);
  const retroarcade = munshidb.find(RetroArcade);
  const vehicleWarehouse = munshidb.find(VehicleWarehouse);
  const yacht = munshidb.find(Yacht);

  //Properties One
  const propertiesOne = [
    {
      id: 1,
      data: arena,
      name: "Arena Workshop",
      background: "bg-red-800",
      margintop: "mt-4",
    },
    {
      id: 2,
      data: auto,
      name: "Auto Shop",
      background: "bg-red-600",
      margintop: "mt-0",
    },
    {
      id: 3,
      data: bunker,
      name: "Bunker",
      background: "bg-red-400",
      margintop: "mt-0",
    },
    {
      id: 4,
      data: cargo,
      name: "Cargo Warehouse",
      background: "bg-violet-600",
      margintop: "mt-0",
    },
    {
      id: 5,
      data: casino,
      name: "Casino Penthouse",
      background: "bg-violet-800",
      margintop: "mt-0",
    },
    {
      id: 6,
      data: execoffice,
      name: "Auto Shop",
      background: "bg-teal-800",
      margintop: "mt-0",
    },
  ];
  //Properties Two
  const propertiesTwo = [
    {
      id: 1,
      data: facility,
      name: "Facility",
      background: "bg-red-800",
      margintop: "mt-4",
    },
    {
      id: 2,
      data: garage,
      name: "Garage",
      background: "bg-teal-800",
      margintop: "mt-0",
    },
    {
      id: 3,
      data: hangar,
      name: "Hangar",
      background: "bg-teal-600",
      margintop: "mt-0",
    },
  ];

  //Properties Three
  const propertiesThree = [
    {
      id: 1,
      data: nightclub,
      name: "Nightclub",
      background: "bg-red-800",
      margintop: "mt-4",
    },
    {
      id: 2,
      data: retroarcade,
      name: "Retro Arcades",
      background: "bg-teal-800",
      margintop: "mt-0",
    },
    {
      id: 3,
      data: vehicleWarehouse,
      name: "Vehicle Warehouse",
      background: "bg-teal-600",
      margintop: "mt-0",
    },
    {
      id: 4,
      data: yacht,
      name: "Yacht",
      background: "bg-green-800",
      margintop: "mt-0",
    },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-[68rem] bg-white px-2">
      <div className="flex flex-col gap-4">
        <Profile />
        <ListBox />

        {/* phase-1 */}
        <Card
          props={agency}
          name={"Agency"}
          background={"bg-green-800"}
          margintop={"mt-0"}
        />
        <SliderCard
          props={apartments}
          name={"Apartments"}
          background={"bg-green-600"}
          margintop={"mt-0"}
        />
        {propertiesOne.map((propertie) => (
          <Card
            key={propertie.id}
            props={propertie.data}
            name={propertie.name}
            background={propertie.background}
            margintop={propertie.margintop}
          />
        ))}

        {/* phase-2 */}
        <SliderCard
          props={execOffGarages}
          name={"Executive Office Garages"}
          background={"bg-teal-600"}
          margintop={"mt-0"}
        />
        {propertiesTwo.map((propertie) => (
          <Card
            key={propertie.id}
            props={propertie.data}
            name={propertie.name}
            background={propertie.background}
            margintop={propertie.margintop}
          />
        ))}

        {/* phase-3 */}
        <SliderCard
          props={largeVehicles}
          name={"Large Vehicle Properties"}
          background={"bg-orange-800"}
          margintop={"mt-0"}
        />
        <Card
          props={clubhouse}
          name={"MC Clubhouse"}
          background={"bg-orange-600"}
          margintop={"mt-4"}
        />
        <SliderCard
          props={mcBusinesses}
          name={"MC Businesses"}
          background={"bg-orange-800"}
          margintop={"mt-0"}
        />

        {/* phase-4 */}
        {propertiesThree.map((propertie) => (
          <Card
            key={propertie.id}
            props={propertie.data}
            name={propertie.name}
            background={propertie.background}
            margintop={propertie.margintop}
          />
        ))}

        <Footer />
      </div>
    </main>
  );
}
