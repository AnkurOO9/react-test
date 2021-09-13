import React, { useEffect, useState } from 'react';
import contentActions from '../Redux/Content/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as queryString from 'query-string';
import moment from 'moment';
import Tickets from '../interface/Tickets';
import TicketDetails from './common/ticketDetails';
import QueryParams from '../interface/queryParams';

interface RootState {
  content: any;
}

interface ContentProps {
  queryParams: QueryParams
}

const Content: React.FC<ContentProps> = ({ queryParams }) => {

  const dispatch = useDispatch();
  const { contentList } = useSelector((state: RootState) => state.content);
  const [filterData, setFilterData] = useState<Tickets[]>([]);

  useEffect(() => {
    setFilterData(contentList);
  }, [contentList]);

  useEffect(() => {
    if (Object.values(queryParams).every(x => x === null || x === '' || x === undefined)) {
      const temp = {}
      dispatch(contentActions.getContent(queryString.stringify(temp)));
    }
    else {
      const objectCopy = JSON.parse(JSON.stringify(queryParams));
      for (const field in objectCopy) {
        if (objectCopy[field] === null || objectCopy[field] === undefined || objectCopy[field] === '') {
          delete objectCopy[field];
        }
      }
      for (const field in objectCopy) {
        switch (field) {
          case 'status':
            objectCopy.status = objectCopy.status.toLowerCase();
            break;
          case 'dueDateTo':
            objectCopy.result_date_lte = moment(objectCopy.dueDateTo).format('YYYY-MM-DD');
            delete objectCopy.dueDateTo;
            break;
          case 'dueDateFrom':
            objectCopy.result_date_gte = moment(objectCopy.dueDateFrom).format('YYYY-MM-DD');
            delete objectCopy.dueDateFrom;
            break;
          case 'title':
            objectCopy.title_like = objectCopy.title;
            delete objectCopy.title;
            break;
        
        }
      }
      dispatch(contentActions.getContent(queryString.stringify(objectCopy)));
    }
  }, [dispatch, queryParams]);

  return (
    <div className="card shadow mt-5">
      <div className="card-header fw-bolder">Results</div>
      <div className="card-body">
        <div className="row">
          {
            filterData.map((content: Tickets) => {
              return <TicketDetails ticket={content} key={content.id} />
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Content;