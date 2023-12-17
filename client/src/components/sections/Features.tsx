
const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about Manage?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1                   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  text-center me-2 mb-2'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Establishing a Seller Presence
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Establishing a Seller Presence
              </h3>
              <p className='text-darkGrayishBlue'>
                Begin the journey by creating a seller account, establishing a personalized online presence with a unique store name and description. This foundational step integrates sellers into our e-commerce community.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1                   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  text-center me-2 mb-2'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Curating the Storefront Experience
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Curating the Storefront Experience
              </h3>
              <p className='text-darkGrayishBlue'>
                Dive into product curation and store customization. Easily add and showcase a diverse range of products, each with its unique attributes. Tailor the storefront to reflect brand identity, creating an engaging and distinctive online shopping destination.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1                   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm  text-center me-2 mb-2'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Streamlining Order Management
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Streamlining Order Management
              </h3>
              <p className='text-darkGrayishBlue'>
                Efficiently manage orders by confirming them promptly and updating the status for those in transit to 'delivering.' This step ensures a smooth transaction process, enhances customer experience, and solidifies the seller's role in the dynamic e-commerce landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
