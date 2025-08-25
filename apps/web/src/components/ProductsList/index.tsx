"use client";

import  { useState } from "react";
import { MdFilterList, MdSearch, MdSort } from "react-icons/md";
import SharedButton from "../shared/SharedButton";
//filter
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


////sort
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//// sort
import ProductCard from "../ProductCard"

import styles from './productsList.module.scss';
import SharedModal from "../shared/SharedModal";

export default function ProductsList({ products }: any) {
  
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [showSortModal, setShowSortModal] = useState(false)
   const handleChange = (event: any) => {
    // setAge(event.target.value);
  };

  const handleShowFilterModal = () => {
    setShowFilterModal(prev => !prev)
  } 
  const handleShowSortModal = () => {
    setShowSortModal(prev => !prev)
  } 

  return (
    <>
      <div className={styles.productFilterContainer}>
        <div className={styles.productFilterItem}>
          <SharedButton onClick={handleShowFilterModal} type="text">
            <MdFilterList />
            <p>Filter</p>
          </SharedButton>
          <SharedButton onClick={handleShowSortModal} type="text">
            <MdSort />
            <p>Urutkan</p>
          </SharedButton>
        </div>
        <div className={styles.productFilterItemSearch}>
          <input 
            type="text"
            placeholder="Cari Pelatihan"
            className={styles.searchProductList}
          />
          <MdSearch size={20}/>
        </div>
      </div>
      <div className={styles.productGrid}>
        {products?.map((product:any, index: number) => (
            <ProductCard key={index} product={product} />
        ))}
      </div>


      <SharedModal
        title="Filter"
        handleDialog={handleShowFilterModal}
        open={showFilterModal}
        classNameContainer={styles.filterModalContainer}
      >
        <div>
          <FormLabel>Tanggal Pelaksanaan</FormLabel>
          <div className={styles.dateFilterContainer}>
            <input type="date" />
            <input type="date" />
          </div>
        </div>
        
        <div className={styles.filterRadioContainer}>
          <div>
            <FormLabel id="demo-radio-buttons-group-label">Biaya</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel value="free" control={<Radio />} label="Gratis" />
              <FormControlLabel value="paid" control={<Radio />} label="Berbayar" />
            </RadioGroup>
          </div>
          <div>
            <FormLabel id="demo-radio-buttons-group-label">Kategori Pelatihan</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel control={<Checkbox />} label="Webinar" />
              <FormControlLabel control={<Checkbox />} label="Workshop" />
              <FormControlLabel control={<Checkbox />} label="Pelatihan" />
            </RadioGroup>
          </div>
        </div>

      <div>
        <FormLabel>JPL</FormLabel>
        <div className={styles.filterJPLContainer}>
          <input placeholder="Min" type="number" />
          -
          <input placeholder="Max" type="number" />
        </div>
      </div>

      </SharedModal>

      <SharedModal
        title="Sort"
        handleDialog={handleShowSortModal}
        open={showSortModal}
        classNameContainer={styles.SortModalContainer}
      >
        <div className={styles.gridSortContainer}>
          <div className={styles.sortItemName}>
            <FormLabel>Nama Pelatihan</FormLabel>
            <Select
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={"az"}>A - Z</MenuItem>
              <MenuItem value={"za"}>Z - A</MenuItem>
            </Select>
          </div>
          <div className={styles.sortItemNameParticipant}>
            <FormLabel>Jumlah Peserta</FormLabel>
            <Select
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={"Paling banyak / sedikit"}>Paling banyak / sedikit</MenuItem>
              <MenuItem value={"Paling sedikit / sedikit"}>Paling sedikit / sedikit</MenuItem>
            </Select>
          </div>
          <div className={styles.sortItemNameQuota}>
            <FormLabel>Kuota</FormLabel>
            <Select
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={"Paling banyak / sedikit"}>Paling banyak / sedikit</MenuItem>
              <MenuItem value={"Paling sedikit / sedikit"}>Paling sedikit / sedikit</MenuItem>
            </Select>
          </div>
        </div>
      </SharedModal>
    </>
  );
}