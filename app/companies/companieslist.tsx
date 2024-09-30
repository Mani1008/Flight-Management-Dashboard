"use client";
import { useEffect, useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
// import { Button } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

// Define the type for a company
type Company = {
    id: number;
    name: string;
    address: string;
    zip: string;
    country: string;
};

const CompaniesTable = () => {
    // State to store fetched companies data
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch the company data
    const fetchCompanies = () => {
        setLoading(true); // Set loading true while fetching new data
        fetch('https://fake-json-api.mock.beeceptor.com/companies')
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data);
                setLoading(false); // Stop loading after data is fetched
            })
            .catch(() => {
                setLoading(false); // Stop loading even if error occurs
            });
    };

    // Fetch company data once on component mount
    useEffect(() => {
        fetchCompanies(); // Fetch data when component mounts
    }, []); // Empty dependency array ensures this runs only on initial mount

    // Define table columns
    const columns = useMemo<MRT_ColumnDef<Company>[]>(
        () => [
            {
                accessorKey: 'name', // Access company name
                header: 'Company Name',
                size: 200,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 250,
            },
            {
                accessorKey: 'zip',
                header: 'Zip Code',
                size: 100,
            },
            {
                accessorKey: 'country',
                header: 'Country',
                size: 150,
            },
        ],
        [],
    );

    // Create table using MaterialReactTable hook
    const table = useMaterialReactTable({
        columns,
        data: companies, // Use the fetched companies data
    });

    return (
        <>
            <h2 className="text-3xl font-bold underline pb-5">Company Data | Fetching Data with API</h2>

            {/* Refresh Data Button */}
            <div className="mb-4 flex ">
                <Button className='mr-10 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded' placeholder={"Refresh Data"} onClick={fetchCompanies}>
                    Refresh Data
                </Button>
                {/* Show Loading State */}
                {loading ? <p>Loading...</p> : null}
            </div>



            {/* Display Table */}
            {companies.length > 0 ? (
                <MaterialReactTable table={table} />
            ) : (
                <p>No company data available.</p>
            )}
        </>
    );
};

export default CompaniesTable;










// "use client";
// import { useEffect, useMemo, useState } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
// } from 'material-react-table';

// // Define the type for a company
// type Company = {
//   id: number;
//   name: string;
//   address: string;
//   zip: string;
//   country: string;
// };

// const CompaniesTable = () => {
//   // State to store fetched companies data
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [hasFetched, setHasFetched] = useState(false);

//   // Fetch company data from API
//   useEffect(() => {
//     if (hasFetched) return; // Prevent double fetch

//     // Fetch data client-side
//     fetch('https://fake-json-api.mock.beeceptor.com/companies')
//       .then((response) => response.json())
//       .then((data) => {
//         setCompanies(data);
//         setLoading(false);
//         setHasFetched(true); // Mark fetch as done
//       })
//       .catch(() => {
//         setLoading(false);
//         setHasFetched(true); // Even on error, mark fetch as done
//       });
//   }, [hasFetched]); // Ensure it only runs once

//   // Define table columns
//   const columns = useMemo<MRT_ColumnDef<Company>[]>(
//     () => [
//       {
//         accessorKey: 'name', // Access company name
//         header: 'Company Name',
//         size: 200,
//       },
//       {
//         accessorKey: 'address',
//         header: 'Address',
//         size: 250,
//       },
//       {
//         accessorKey: 'zip',
//         header: 'Zip Code',
//         size: 100,
//       },
//       {
//         accessorKey: 'country',
//         header: 'Country',
//         size: 150,
//       },
//     ],
//     [],
//   );

//   // Create table using MaterialReactTable hook
//   const table = useMaterialReactTable({
//     columns,
//     data: companies, // Use the fetched companies data
//   });

//   return (
//     <>
//       <h2 className="text-3xl font-bold underline pb-5">Company Data | Fetching Data with API</h2>
//       {loading ? <p>Loading...</p> : null}
//       {companies.length > 0 ? (
//         <MaterialReactTable table={table} />
//       ) : (
//         <p>No company data available.</p>
//       )}
//     </>
//   );
// };

// export default CompaniesTable;
