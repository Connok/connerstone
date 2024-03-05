import InfoBox from "./InfoBox";
const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-200"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Booknark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Owners"
            backgroundColor="bg-purple-100"
            buttonInfo={{
              text: "Add Properties",
              link: "/properties/add",
              backgroundColor: "bg-purple-500",
            }}
          >
            LIst your properties and reach potential tennants. Rent as an Airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
