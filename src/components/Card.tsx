import Link from "next/link";


const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container ">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
              image="https://photos.zillowstatic.com/fp/1a25db3a61d686c89ca1f0761808c8f7-cc_ft_768.webp"
              CardTitle="300 Bayview Dr APT 616, Sunny Isles Beach, FL 33160"
              titleHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.616-Sunny-Isles-Beach,-FL-33160_rb/44386401_zpid/"
              btnHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.616-Sunny-Isles-Beach,-FL-33160_rb/44386401_zpid/"
              CardDescription="An authentic three-bedroom apartment is now available within the Arlen House complex. This unit also includes two full bathrooms and one half bathroom. Each bedroom offers unobstructed views of the stunning Intracoastal Waterway."
              Button="View Details"
              Price={`$925,000,000`}
              Bedrooms={3}
              Bathrooms={3}
            />
          <SingleCard
              image="https://photos.zillowstatic.com/fp/1a095029e4c976d6621ebd2fdcbb0577-cc_ft_768.webp"
              CardTitle="300 Bayview Dr APT 1503, Sunny Isles Beach, FL 33160"
              titleHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.1503-Sunny-Isles-Beach,-FL-33160_rb/44386509_zpid/"
              btnHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.1503-Sunny-Isles-Beach,-FL-33160_rb/44386509_zpid/"
              CardDescription="Welcome to the Florida Riviera Large one-bedroom, 1.5 bathroom with outstanding north views to the marina and Luxurious Towers of the Beautiful Sunny Isles Beach."
              Button="View Details"
              Price={`$340,000`}
              Bedrooms={1}
              Bathrooms={2}
            />
            <SingleCard
              image="https://photos.zillowstatic.com/fp/a7af7339c705d0ac38f549adcb099a69-cc_ft_384.webp"
              CardTitle="300 Bayview Dr APT 102, Sunny Isles Beach, FL 33160"
              titleHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.102-Sunny-Isles-Beach,-FL-33160_rb/44386316_zpid/"
              btnHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.102-Sunny-Isles-Beach,-FL-33160_rb/44386316_zpid/"
              CardDescription="Stunning, one-of-a-kind studio with unobstructed million-dollar views of the Intercostal."
              Button="View Details"
              Price={`$300,000,000`}
              Bedrooms={0}
              Bathrooms={1}
            />
              <SingleCard
              image="https://photos.zillowstatic.com/fp/848b99f3c38c5ade68568f3d50d48a9c-cc_ft_384.webp"
              CardTitle="17570 Atlantic Blvd, APT 119, Sunny Isles Beach, FL 33160"
              titleHref="https://www.zillow.com/homes/17570-Atlantic-Blvd-.num.119-Sunny-Isles-Beach,-FL-33160_rb/44381051_zpid/"
              btnHref="https://www.zillow.com/homes/17570-Atlantic-Blvd-.num.119-Sunny-Isles-Beach,-FL-33160_rb/44381051_zpid/"
              CardDescription="A gorgeous, roomy one-bedroom residence with a separate office/den/small guest room and 1.5 bathrooms is available for rent"
              Button="View Details"
              Price={`$2,100`}
              Bedrooms={1}
              Bathrooms={2}
            />
           <SingleCard
              image="https://photos.zillowstatic.com/fp/b81f76157fdee1f34d5bfdb183fa612d-cc_ft_768.webp"
              CardTitle="300 Bayview Dr APT 210, Sunny Isles Beach, FL 33160"
              titleHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.210-Sunny-Isles-Beach,-FL-33160_rb/44386336_zpid/"
              btnHref="https://www.zillow.com/homes/300-Bayview-Dr-.num.210-Sunny-Isles-Beach,-FL-33160_rb/44386336_zpid/"
              CardDescription="One of a kind with spectacular views of the Intercostal and pool area. This 2/2 renovated has it all."
              Button="View Details"
              Price={`$525,000`}
              Bedrooms={2}
              Bathrooms={2}
            />
         
              <SingleCard
              image="https://photos.zillowstatic.com/fp/fb4f684929d1a17da746adea88259200-cc_ft_384.webp"
              CardTitle="19667 Turnberry Way, APT 14E, Aventura, FL 33180"
              titleHref="https://www.zillow.com/homes/19667-Turnberry-Way-.num.14E-Aventura,-FL-33180_rb/44052291_zpid/"
              btnHref="https://www.zillow.com/homes/19667-Turnberry-Way-.num.14E-Aventura,-FL-33180_rb/44052291_zpid/"
              CardDescription="This condo has four bedrooms and two bathrooms, making it a spacious and comfortable living space. One of the critical lease points of this property is the stunning views it offers. Residents can enjoy beautiful vistas of the Intracoastal, Aventura Marina, and the ocean, enhancing the overall living experience"
              Button="View Details"
              Price={`$6,300`}
              Bedrooms={4}
              Bathrooms={2}
            />
      
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

interface SingleCardProps {
    image: string;
    CardTitle: string;
    titleHref?: string;
    btnHref?: string;
    CardDescription: string;
    Button?: string;
    Price? : number | string;
    Bedrooms?: number | string;
    Bathrooms?: number | string;
    
}


const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  Price,
  Bedrooms,
  Bathrooms
} : SingleCardProps) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-[#1c2143]  duration-300  shadow-2xl ">
        <img src={image} alt="" className="w-full" />
        <div className="p-8  text-center sm:p-9 md:p-7 xl:p-9 bg-[#1c2143] text-white">
          <h3>
            <Link href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </Link>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color">
            {CardDescription}
          </p>
          <p className="mb-7 text-base leading-relaxed text-body-color"> Bedrooms :
          <span> {Bedrooms}</span>  
           <br />
           <span> Bathrooms : {Bathrooms}</span>
            <br />
           <span>Price : {Price}</span> 
          </p>

          {Button && (
            <Link
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-xl border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:text-[#2f5972] hover:bg-[#f5fbf9] hover:scale-105"
            >
              {Button}
            </Link>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
