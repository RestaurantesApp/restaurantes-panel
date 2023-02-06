const pagesRange = (paginas = [], actual = 0, rango = 0) => {
  let cantidadPaginas = paginas.length;
  let paginaFinal = paginas[cantidadPaginas - 1];
  let desde = actual - rango;
  let hasta = actual + rango;
  let paginasFiltradas = [];
  paginas.forEach(page => {
    if (
      page === paginas[0] ||
      (page >= desde && page <= hasta) ||
      page === paginaFinal
    ) {
      paginasFiltradas.push(page);
    }
  });
  return paginasFiltradas;
};

const pagesEllipsis = (paginas = []) => {
  let cantidadPaginas = paginas.length;
  let paginaFinal = paginas[cantidadPaginas - 1];
  let rango_con_ellipsis = [];
  paginas.forEach((page, i) => {
    if (page === paginaFinal) {
      rango_con_ellipsis.push(paginaFinal);
    } else if (paginas[i] === page && paginas[i + 1] !== page + 1) {
      rango_con_ellipsis.push(page);
      rango_con_ellipsis.push('...');
    } else {
      rango_con_ellipsis.push(page);
    }
  });
  return rango_con_ellipsis;
};

export const getPagination = (pages = [], pageSelect = 0, pageRange = 0) => {
  let rangoPaginas = pagesRange(pages, pageSelect, pageRange);
  let paginacion = pagesEllipsis(rangoPaginas);
  return paginacion;
};
