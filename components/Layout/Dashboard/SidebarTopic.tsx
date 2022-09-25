import { faChevronDown, faChevronUp, faHashtag, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const ChevronIcon = ({ expanded }: any) => {
  const chevronClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FontAwesomeIcon icon={faChevronUp} className={chevronClass} />
  ) : (
    <FontAwesomeIcon icon={faChevronDown} className={chevronClass} />
  );
};

const TopicSelection = ({ selection }: any) => (
  <div className='dropdown-selection'>
    <FontAwesomeIcon icon={faHashtag} className='text-gray-400' />
    <button type='button' className='dropdown-selection-text'>
      <Link href={`#${selection}`}>{selection}</Link>
    </button>
  </div>
);

export const Dropdown = ({ header, selections }: any) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>
        <FontAwesomeIcon icon={faPlus} className='my-auto ml-auto text-accent text-opacity-80' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection: any) => (
          <TopicSelection key={selection} selection={selection} />
        ))}
    </div>
  );
};

export const SidebarBlock = ({ title }: any) => (
  <div className='sidebar-block'>
    <h5 className='sidebar-block-text'>{title}</h5>
  </div>
);
