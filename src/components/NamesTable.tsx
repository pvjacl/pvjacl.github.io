import React, { useState, useEffect } from "react";
import namesJson from "../names.json";

import './NamesTable.scss';

const randomGroupSize = 20;

// describes the structure of names.json
type Name = {
  last_name: string;
  first_name: string;
  family_id: string;
};

const sortByLast = (nameA:Name, nameB:Name) => {
  const compareLast = nameB.last_name - nameA.last_name;
  if (compareLast === 0) {
    return nameB.first_name - nameA.first_name;
  }
  return compareLast;
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

// Convert each name to HTML
const nameToHtml = (name: Name) => (
  <tr key={`${name.last_name}_${name.first_name}_${name.family_id}`}>
    <td>{name.last_name}</td>
    <td>{name.first_name}</td>
    <td>{name.family_id}</td>
  </tr>
);

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
            <th>Family Identifier</th>
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
      <button onClick={() => window.scrollTo(0,0)}>Back to Top</button>
    </div>
  );
};

export default NamesTable;
