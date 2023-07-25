import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const regexes = [
  {
    title: 'Master Card',
    regex: [
      '/^4([0-9]{3})s?([0-9]{4})s?([0-9]{4})s?([0-9]{4})$/',
      '/^4([0-9]{3})s?([0-9]{4})s?([0-9]{4})s?([0-9]{4})$/',
    ],
    description: 'Regex for Master Cards',
  },
  {
    title: 'US Zip Code',
    regex: ['/^d{5}-d{4}|d{5}|[A-Z]d[A-Z] d[A-Z]d$/'],
    description: 'Regex for US Zip Code',
  },
  {
    title: 'US Phone Number',
    regex: ['/^+?[1-9][0-9]{7,14}$/'],
    description: 'Regex for US Phone Number',
  },
  {
    title: 'IP Addresses',
    regex: [
      '/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/',
    ],
    description: 'Regex for IP Addresses',
  },
  {
    title: 'Email Addresses',
    regex: ['/^S+@S+.S+$/'],
    description: 'This is a sample regex',
  },
  {
    title: 'GUID',
    regex: [
      '/^(?:{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}}{0,1})$/',
    ],
    description: 'Regex for GUID',
  },
  {
    title: 'SSN',
    regex: ['/^(?!666|000|9d{2})d{3}-(?!00)d{2}-(?!0{4})d{4}$/'],
    description: 'Regex for SSN',
  },
  {
    title: 'MAC',
    regex: ['/^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/'],
    description: 'Regex for MAC Address',
  },
  {
    title: 'GSTIN',
    regex: [
      '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[0-9A-Z]{1}[0-9A-Z]{1}',
    ],
    description: 'Regex for GSTIN Number',
  },
];

const MainBar = () => {
  return (
    <div>
      <div className="flex align-middle items-center gap-4 mb-2">
        <Link href="/libraries">
          <ArrowLeftIcon className="h-5 cursor-pointer text-gray-900 dark:text-gray-200" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-500  dark:text-gray-200">
          Regex Library
        </h1>
      </div>

      <div className="p-4">
        <p className="text-gray-500  dark:text-gray-200">
          You can use the following regex libraries to prepare your CSV file.
        </p>
      </div>

      <div className="grid grid-cols-2">
        {regexes &&
          regexes.map((obj, idx) => (
            <div
              className="mt-4 bg-white rounded-md flex flex-col  justify-between p-4 mx-2 shadow-sm"
              key={idx}
            >
              <h2 className="text-lg text-blue-500">
                {obj.title.toUpperCase()}
              </h2>

              <div className="flex flex-col p-1">
                {obj?.regex?.map((regex, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between my-1 shadow-md p-2 rounded-md bg-gray-100  hover:bg-gray-200"
                  >
                    <h1 className="text-sm">{regex}</h1>

                    <button
                      type="button"
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold h-8 hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full text-sm mx-2"
                      onClick={() => {
                        navigator.clipboard.writeText(regex);
                      }}
                    >
                      COPY
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <h2 className="text-md text-gray-400 mt-2">
                  {obj.description}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainBar;
