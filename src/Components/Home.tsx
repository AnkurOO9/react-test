import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import QueryParams from '../interface/queryParams';

const Home: React.FC = () => {

	const urlParams = new URLSearchParams(window.location.search);
	const title : string = urlParams.get('title')!;
	const status : string = urlParams.get('status')!;

	const [queryParams, setQueryParams] = useState<QueryParams>({} as QueryParams);

	useEffect(() => {
		if(title !== null || status !== null) {
			let object: QueryParams = {
				title: title!,
				status: status!,
			}
			setQueryParams(object)
		}
	}, [title, status]);

	const applyFilter = (data: QueryParams) => {
		setQueryParams(data)
	}

	const clearFilter = () => {
		setQueryParams({} as QueryParams)
	}

	return (
		<div className="container">
			<Header queryParams={queryParams} applyFilter={applyFilter} clearFilter={clearFilter} />
			<Content queryParams={queryParams} />
		</div>
	);
}

export default Home;
