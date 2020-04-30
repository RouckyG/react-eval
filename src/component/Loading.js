import React from 'react';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const icone = <FontAwesomeIcon icon={faSpinner} size="7x" spin/>

function Loading(){

    return  <div>{icone}</div>;
}

export default Loading;