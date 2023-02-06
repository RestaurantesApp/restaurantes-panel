import React, { useEffect, useState } from 'react';

// Assets
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Styles
import { IconButtonCustom } from '../../atoms';

// Utils
import { getPagination } from '../../../core/utils';

const TablePagination = ({
  canPreviousPage = false,
  canNextPage = false,
  gotoPage = () => null,
  nextPage = () => null,
  pageIndex = 0,
  pageOptions = [],
  previousPage = () => null,
  isResetPagina = false,
  setIsResetPagina = () => null,
}) => {
  const [pagesShow, setPagesShow] = useState([]);

  useEffect(() => {
    const pagination = getPagination(pageOptions, pageIndex, 2);
    setPagesShow(pagination);
  }, [pageOptions, pageIndex]);

  useEffect(() => {
    if (isResetPagina) {
      setIsResetPagina(false);
      gotoPage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResetPagina]);

  return (
    <div className="flex justify-center items-center mt-5">
      <IconButtonCustom
        icon={<ArrowBackIosIcon fontSize="20" className="fill-primary" />}
        onClick={previousPage}
        disabled={!canPreviousPage}
        size="small"
      />
      {pagesShow.map((page, index) => (
        <div
          key={index}
          className={`flex justify-center items-center mx-1 w-6 h-6 cursor-pointer rounded-md ${
            pageIndex === page ? 'text-white bg-general' : 'color-general'
          }`}
          onClick={() => page !== '...' && gotoPage(page)}
        >
          <span className="text-center fontPRegular text-sm">
            {page !== '...' ? page + 1 : page}
          </span>
        </div>
      ))}
      <IconButtonCustom
        icon={<ArrowForwardIosIcon fontSize="20" className="fill-primary" />}
        onClick={nextPage}
        disabled={!canNextPage}
        size="small"
      />
    </div>
  );
};

export default TablePagination;
