import React from 'react';

const CensusTable = ({ data }) => {
  if (data.length === 0) {
    return <div className="text-center p-4">No data available</div>;
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Gender</th>
          <th className="py-2">Birth Date</th>
          <th className="py-2">Vaccinated</th>
        </tr>
      </thead>
      
      <tbody>
        {data.map((person) => (
          <tr key={person.id} className="text-center">
            <td className="py-2">{person.name}</td>
            <td className="py-2">{person.gender}</td>
            <td className="py-2">{new Date(person.birthdate).toLocaleDateString()}</td>
            <td className="py-2">{person.is_vaccinated ? 'Yes' : 'No'}</td>
             
          </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default CensusTable;
