import React, { useState } from 'react';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

let page = 1;

const App = () => {
  const [imageArray, SetImageArray] = useState([]);
  const [loadStatus, SetLoadStatus] = useState(false);
  const [searchKey, SetSearchKey] = useState('');
  const [dataFilled, SetDataFilled] = useState(false);

  const countOfPagePagination = 12;

  const getApi = (imageName, pageNumber) => {
    return (
      'https://pixabay.com/api/?q=' +
      imageName +
      '&page=' +
      pageNumber +
      '&key=33160634-a3b69315a0080f1036a2567f6&image_type=photo&orientation=horizontal&per_page=' +
      countOfPagePagination
    );
  };

  const getOtherImageCount = (totalHits, pageCount) => {
    return totalHits - pageCount * countOfPagePagination > 0;
  };

  const initDate = data => {
    SetImageArray(state => []);
    SetSearchKey(state => data.imageName);
  };

  const setValues = (data, loadMore) => {
    if (loadMore) {
      SetImageArray(state => [...state, ...data.hits]);
    } else {
      SetImageArray(state => data.hits);
    }
    SetDataFilled(state => getOtherImageCount(data.totalHits, page));
  };

  const processData = (imageName, loadMore) => {
    SetLoadStatus(state => true);
    const URL = getApi(imageName, page);

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Немає даних по запиту ${imageName}`));
      })
      .then(data => {
        setValues(data, loadMore);
      })
      .catch(error => {})
      .finally(() => {
        SetLoadStatus(state => false);
      });
  };

  const formSubmitHandler = data => {
    page = 1;
    initDate(data);
    processData(data.imageName, false);
  };

  const buttonLoadClick = data => {
    if (searchKey.trim() !== '') {
      page += 1;
      processData(searchKey, true);
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery images={imageArray} />
      {loadStatus && <Loader />}
      {dataFilled && <Button onSubmit={buttonLoadClick} />}
    </div>
  );
};

export default App;
