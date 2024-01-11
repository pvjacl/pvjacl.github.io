import React, { useState } from 'react';
import './SearchKeywordsForm.scss';

export type PostDetail = {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
}

type Props = {
  postDetails: PostDetail[];
}

const SearchKeywordsForm = ({postDetails}: Props) => {
  const [ inputValue, setSearchText] = useState('');
  const [ matchingPosts, setMatchingPosts] = useState([] as PostDetail[]);

  const searchPostKeywords = (postDetail:PostDetail):string[] => {
    let foundStrings:string[] = [];
    const inputLower = inputValue.toLowerCase();
    const keywords = postDetail.keywords.split(" ");
    keywords.forEach (keyword => {
        if (keyword.toLowerCase().indexOf(inputLower) >=0) {
        foundStrings.push(keyword);
        }
    })
    return foundStrings;
  }

  const onChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    setSearchText(val);
    let foundPosts = [];
    if (val.length >= 3) {
      foundPosts = postDetails.filter(postD => {
        const foundWords = searchPostKeywords(postD);
        return (foundWords.length > 0);
      })
    }
    setMatchingPosts(foundPosts || []);
  }

  return (
    <div className="search-keywords">
      <form>
        <label>Enter a keyword to search for:&nbsp;
          <input type="text" placeholder='word to search for' onChange={onChangeText} value={inputValue}/>
        </label>
      </form>
      <div>
        <ul className="posts">
        {matchingPosts.map(postD => {
          const keywords = postD.keywords.split(' ');
          return (
            <li key={postD.id}>
              <h5><a href={postD.slug}>{postD.title}</a></h5>
              <ul>
                <li>
                  <strong>Description: </strong>
                  <span>{postD.description}</span>
                </li>
                <li>
                  <strong>Keywords: </strong>
                  <span>{keywords.join(', ')}</span>
                </li>
              </ul>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  )
}

export default SearchKeywordsForm;