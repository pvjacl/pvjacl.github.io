import { useState, useEffect } from "react";
import namesJson from "../names.json";
import Modal from './Modal';

import './NamesTable.scss';

const randomGroupSize = 20;

// describes the structure of names.json
type Name = {
  last_name: string;
  first_name: string;
  family_id: string;
  mixed_case_last_name: string;
  mixed_case_first_name: string;
  family_digits: string;
};

const sortByLast = (nameA:Name, nameB:Name) => {
  if (nameA.last_name < nameB.last_name) {
    return -1;
  } else if (nameA.last_name > nameB.last_name) {
    return 1;
  } else {
    if (nameA.first_name < nameB.first_name) {
      return -1;
    } else if (nameA.first_name > nameB.first_name) {
      return 1;
    }
    return 0;
  }
}

const sortByFamilyId = (nameA:Name, nameB:Name) => {
  if (nameA.family_id < nameB.family_id) {
    return -1;
  } else if (nameA.family_id > nameB.family_id) {
    return 1;
  } 
  return 0;
}

const namesSorted = namesJson.sort(sortByLast);

// The different ways we show our names table
enum Show {
  allNames,
  search,
  random,
}

// how we specify each of the radio buttons
type RadData = {
  label: string;
  value: Show;
  comment?: string;
};

// descriptions of each of the radio buttons
const radioGroup: RadData[] = [
  {
    label: "Random Group",
    value: Show.random,
    comment: `- We show ${randomGroupSize} names from the list`,
  },
  {
    label: "Show All",
    value: Show.allNames,
    comment: `- Show all ${namesSorted.length} names (this can take a while)`,
  },
  {
    label: "Search for Name",
    value: Show.search,
  },
];


// determines whether search string is in the name
const searchName = (name: Name, searchString: string) => {
  const nameLower = `${name.last_name.toLowerCase()} ${name.first_name.toLowerCase()}`;
  const searchLower = searchString.toLowerCase();
  return nameLower.indexOf(searchLower) >= 0;
}

const NamesTable = () => {
  const [show, SetShow] = useState(Show.random);
  const [nameList, setNameList] = useState([] as Name[]);
  const [searchText, setSearchText] = useState("");
  const [familyCode, setFamilyCode] = useState("");

  useEffect(() => {  
    // this function runs every time that show or searchText values change
    switch (show) {
      case Show.random:
        const start = Math.random() * (namesSorted.length - randomGroupSize);
        setNameList(namesSorted.slice(start, start + randomGroupSize));
        break;
      case Show.search:
        if (searchText.length === 0) {
          setNameList([]);
          break;
        }
        const names = namesSorted.filter((name:Name) => searchName(name, searchText));
        setNameList(names);
        break;
      case Show.allNames:
      default:
        setNameList(namesSorted);
        break;
    }
  }, [show, searchText])
  
  const familyModal = () => {
    if (familyCode) {
      const familyNames = nameList.filter((name:Name) => (familyCode === name.family_digits)).sort(sortByFamilyId);
      window.scrollTo(0,0);
      return (
        <Modal isOpen={true} hasCloseBtn={true} onClose={() => {setFamilyCode('')}}>
          <div className="modal-data">
            {familyNames.map((name, i) => {
              if (i === 0) {
                return (
                  <div key={i}>
                    <span className="modal-last-name">{name.mixed_case_last_name}, </span><span className="modal-first-name">{name.mixed_case_first_name}&nbsp;</span><span className="modal-family-id">{name.family_id}</span>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="modal-first-name-only">{name.mixed_case_first_name}&nbsp;<span>{name.family_id}</span></div>
                )
              }
            })}
          </div>
        </Modal>
      );
    }
    return null;
  }
  
  // Convert each name to HTML
  const nameToHtml = (name: Name) => (
    <tr key={`${name.last_name}_${name.first_name}_${name.family_id}`}>
      <td>{name.mixed_case_last_name}</td>
      <td>{name.mixed_case_first_name}</td>
      <td className="column-family-id">
        {name.family_id}
        <img className="show-family-button" src="/family.svg" alt="family icon" title="Click to view entire family" onClick={() => setFamilyCode(name.family_digits)}/>
      </td>
    </tr>
  );

  const renderRadio = (radData: RadData) => {
    const { label, value, comment } = radData;

    const renderFilter = () => {
      if (value !== Show.search) return null;
      return (
        <span>
          <input
            className="nameFilter"
            type="text"
            value={searchText}
            onChange={(e) => {
              if (show !== Show.search) SetShow(Show.search);
              setSearchText(e.currentTarget.value);
            }}
            placeholder="Enter name to search for"
          />
        </span>
      );
    };

    return (
      <div  key={label}>
        <input
          type="radio"
          id={label}
          name={label}
          value={value}
          checked={show === value}
          onChange={() => {
            SetShow(value);
          }}
        />
        <label htmlFor={label}>{label}</label>
        <span> {comment} </span>
        {renderFilter()}
      </div>
    );
  };

  const renderTableBody = () => {
    return nameList.map(nameToHtml);
  };

  return (
    <div className="names-table">
      <div>{radioGroup.map(renderRadio)}</div>
      <table>
        <thead>
          <tr>
            <th>Family Name</th>
            <th>First Name</th>
            <th className="column-family-id">Family ID</th>
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
      {familyModal()}
      <button onClick={() => window.scrollTo(0,0)}>Back to Top</button>
    </div>
  );
};

export default NamesTable;
