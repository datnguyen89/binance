const numberUtils = {
  /** Add commas for separate thousand in number */
  thousandSeparator: num => {
    return isNaN(num) ? 0 : Number(num).toLocaleString()
  },
  renderTableIndex: (pageIndex, pageSize, index) => {
    return (Number(pageSize) * (Number(pageIndex) - 1)) + Number(index) + 1
  },
}

export default numberUtils
