import React, {useState} from 'react';
import namesJson from '../names.json';

type Name = {
  last_name: string;
  first_name: string;
  family_id: string;
};

enum Show {
  AllNames,
  Search,
  Random50
};

const nameToHtml = (name:Name) => (
  <tr>
    <td>{name.last_name}</td>
    <td>{name.first_name}</td>
    <td>{name.family_id}</td>          
  </tr>
)

// const renderOptions = (id: string) => {

//   const renderRadio = (label: string, value: string)

//   return (
//       <label>
//         <input
//           type="radio"
//           name="react-tips"
//           value="option1"
//           checked={true}
//           className="form-check-input"
//         />
//         Option 1
//       </label>
//   )
// }

const NamesTable = () => {
  const [ show, SetShow ] = useState(Show.AllNames);

  const renderTableBody = () => {
    let names: Name[] = [];
    switch (show) {
      case Show.Random50:
        const start = Math.random() * (namesJson.length - 50);
        const subnames = namesJson.slice(start, start + 50);
        return subnames.map(nameToHtml);
      case Show.AllNames:
      default:
        return namesJson.map(name => nameToHtml(name));
        break;
    } 
  }

  return (
    <div>
      <div>
      </div>
      <table>
      <tr>
        <td><strong>Family Name</strong></td>
        <td><strong>First Name</strong></td>
        <td><strong>Family Identifier</strong></td>
      </tr>
        {renderTableBody()}
      </table>
    </div>
  )
}

export default NamesTable;