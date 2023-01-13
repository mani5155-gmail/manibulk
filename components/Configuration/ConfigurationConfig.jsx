import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const ConfigurationConfig = ({ configID }) => {
  const [importerData, setImporterData] = useState({});

  useEffect(() => {
    axios
      .get(`/api/importer/${configID}`) 
      .then((res) => {
        setImporterData(res.data);
      })
      .catch((err) => console.log(err));
  }, [configID]);

  return (
    <div className="p-4">
      <div className="flex align-middle justify-between ">
        <div className="flex align-middle items-center gap-2 ">
          <Link href="/configuration">
            <ArrowLeftIcon className="h-5 cursor-pointer" />
          </Link>

          <h1 className="text-2xl font-bold text-gray-500">
            {importerData.name}
          </h1>
        </div>
      </div>
      <div className="mt-4 border-2 border-[#64B6EB] rounded-md p-4 flex flex-col align-middle">
        <div className="flex">
          <div className="flex flex-col w-5/12">
            <h2 className="text-lg font-bold text-gray-500">Key</h2>
            <p className="text-gray-400">
              The unique key used to identify this Importer
            </p>
          </div>
          <div className="ml-10 flex flex-col justify-center w-72">
            <div className="mb-2">
              <span className="text-blue-500">{importerData._id}</span>
            </div>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="flex flex-col w-5/12">
            <h2 className="text-lg font-bold text-gray-500">Name</h2>
            <p className="text-gray-400">Name of the importer</p>
          </div>
          <div className="ml-10 flex flex-col justify-center w-72">
            <div className="mb-2">
              <span> {importerData.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto relative mt-3">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400 table">
          <thead className="text-xs text-gray-500 uppercase dark:bg-gray-700 dark:text-gray-400 h-10 bg-blue-50">
            <tr>
              <th scope="col" className="py-3">
                Importer Name
              </th>
              <th scope="col" className="py-3">
                Importer ID
              </th>

              <th scope="col" className="py-3 ">
                Date Created
              </th>
              <th scope="col" className="py-3">
                Attached Template 
              </th>
            </tr>
          </thead>
          {importerData ? (
              <tr key={importerData._id} className="h-10 text-center">
                <td>{importerData.name}</td>
                <td>{importerData._id}</td>
                <td>{importerData.date ? importerData.date.split('T')[0] : 'NA'}</td>
                <td>{importerData.templateName}</td>
              </tr>
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default ConfigurationConfig;
