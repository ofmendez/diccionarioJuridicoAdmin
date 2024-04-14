import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContentFrame from '@src/components/ContentFrame';
import SearchFilters from '@src/components/SearchFilters';
import SearchResults from '@src/components/SearchResults';
import { Skeletons } from '@src/components/Skeletons';
import TermsSearchForm from '@src/components/TermsSearchForm';
import useSearchTerm from '@src/hooks/useSearchTerm';

const Search = () => {
	const [loadingTerm, setLoadingTerm] = useState('init');

	const hasContent = (attr) => decodeURIComponent(searchParams.get('content')).split(',').includes(attr);
	const hasSubject = (attr) => decodeURIComponent(searchParams.get('subject')).split(',').includes(attr);

	const [searchParams] = useSearchParams();
	const subjects = useRef({
		Doctrina: hasSubject('Doctrina'),
		Norma: hasSubject('Norma'),
		Jurisprudencia: hasSubject('Jurisprudencia')
	});
	const contents = useRef({
		term: hasContent('term'),
		'meanings.descriptor': hasContent('meanings.descriptor'),
		'meanings.definition': hasContent('meanings.definition'),
		'meanings.source': hasContent('meanings.source')
	});

	const results = useSearchTerm({
		q: searchParams.get('q'),
		subject: searchParams.get('subject'),
		content: searchParams.get('content'),
		setLoadingTerm
	});

	return (
		<ContentFrame>
			<TermsSearchForm searchParams={searchParams} />
			<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
				<div className='SeccionContenidoPaginaBuscador'>
					<Skeletons on={loadingTerm} msg='Cargando'>
						<SearchFilters contents={contents} subjects={subjects} searchParams={searchParams} />
						<SearchResults results={results} query={searchParams.get('q')} />
					</Skeletons>
				</div>
			</div>
		</ContentFrame>
	);
};

export default Search;
