module.exports = function ISO3166() {

  var i = 0;
  var data = [{
    "name": "Afghanistan",
    "alpha_2": "AF",
    "alpha-3": "AFG",
    "country-code": "004",
    "iso_3166-2": "ISO 3166-2:AF",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Åland Islands",
    "alpha_2": "AX",
    "alpha-3": "ALA",
    "country-code": "248",
    "iso_3166-2": "ISO 3166-2:AX",
    "sub-region-code": "154",
    "region-code": "150",
    "sub-region": "Northern Europe",
    "region": "Europe"
  }, {
    "name": "Albania",
    "alpha_2": "AL",
    "alpha-3": "ALB",
    "country-code": "008",
    "iso_3166-2": "ISO 3166-2:AL",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Algeria",
    "alpha_2": "DZ",
    "alpha-3": "DZA",
    "country-code": "012",
    "iso_3166-2": "ISO 3166-2:DZ",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "American Samoa",
    "alpha_2": "AS",
    "alpha-3": "ASM",
    "country-code": "016",
    "iso_3166-2": "ISO 3166-2:AS",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Andorra",
    "alpha_2": "AD",
    "alpha-3": "AND",
    "country-code": "020",
    "iso_3166-2": "ISO 3166-2:AD",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Angola",
    "alpha_2": "AO",
    "alpha-3": "AGO",
    "country-code": "024",
    "iso_3166-2": "ISO 3166-2:AO",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Anguilla",
    "alpha_2": "AI",
    "alpha-3": "AIA",
    "country-code": "660",
    "iso_3166-2": "ISO 3166-2:AI",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Antarctica",
    "alpha_2": "AQ",
    "alpha-3": "ATA",
    "country-code": "010",
    "iso_3166-2": "ISO 3166-2:AQ",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Antigua and Barbuda",
    "alpha_2": "AG",
    "alpha-3": "ATG",
    "country-code": "028",
    "iso_3166-2": "ISO 3166-2:AG",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Argentina",
    "alpha_2": "AR",
    "alpha-3": "ARG",
    "country-code": "032",
    "iso_3166-2": "ISO 3166-2:AR",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Armenia",
    "alpha_2": "AM",
    "alpha-3": "ARM",
    "country-code": "051",
    "iso_3166-2": "ISO 3166-2:AM",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Aruba",
    "alpha_2": "AW",
    "alpha-3": "ABW",
    "country-code": "533",
    "iso_3166-2": "ISO 3166-2:AW",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Australia",
    "alpha_2": "AU",
    "alpha-3": "AUS",
    "country-code": "036",
    "iso_3166-2": "ISO 3166-2:AU",
    "region": "Oceania",
    "sub-region": "Australia and New Zealand",
    "region-code": "009",
    "sub-region-code": "053"
  }, {
    "name": "Austria",
    "alpha_2": "AT",
    "alpha-3": "AUT",
    "country-code": "040",
    "iso_3166-2": "ISO 3166-2:AT",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Azerbaijan",
    "alpha_2": "AZ",
    "alpha-3": "AZE",
    "country-code": "031",
    "iso_3166-2": "ISO 3166-2:AZ",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Bahamas",
    "alpha_2": "BS",
    "alpha-3": "BHS",
    "country-code": "044",
    "iso_3166-2": "ISO 3166-2:BS",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Bahrain",
    "alpha_2": "BH",
    "alpha-3": "BHR",
    "country-code": "048",
    "iso_3166-2": "ISO 3166-2:BH",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Bangladesh",
    "alpha_2": "BD",
    "alpha-3": "BGD",
    "country-code": "050",
    "iso_3166-2": "ISO 3166-2:BD",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Barbados",
    "alpha_2": "BB",
    "alpha-3": "BRB",
    "country-code": "052",
    "iso_3166-2": "ISO 3166-2:BB",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Belarus",
    "alpha_2": "BY",
    "alpha-3": "BLR",
    "country-code": "112",
    "iso_3166-2": "ISO 3166-2:BY",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Belgium",
    "alpha_2": "BE",
    "alpha-3": "BEL",
    "country-code": "056",
    "iso_3166-2": "ISO 3166-2:BE",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Belize",
    "alpha_2": "BZ",
    "alpha-3": "BLZ",
    "country-code": "084",
    "iso_3166-2": "ISO 3166-2:BZ",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Benin",
    "alpha_2": "BJ",
    "alpha-3": "BEN",
    "country-code": "204",
    "iso_3166-2": "ISO 3166-2:BJ",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Bermuda",
    "alpha_2": "BM",
    "alpha-3": "BMU",
    "country-code": "060",
    "iso_3166-2": "ISO 3166-2:BM",
    "region": "Americas",
    "sub-region": "Northern America",
    "region-code": "019",
    "sub-region-code": "021"
  }, {
    "name": "Bhutan",
    "alpha_2": "BT",
    "alpha-3": "BTN",
    "country-code": "064",
    "iso_3166-2": "ISO 3166-2:BT",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Bolivia (Plurinational State of)",
    "alpha_2": "BO",
    "alpha-3": "BOL",
    "country-code": "068",
    "iso_3166-2": "ISO 3166-2:BO",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Bonaire, Sint Eustatius and Saba",
    "alpha_2": "BQ",
    "alpha-3": "BES",
    "country-code": "535",
    "iso_3166-2": "ISO 3166-2:BQ",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Bosnia and Herzegovina",
    "alpha_2": "BA",
    "alpha-3": "BIH",
    "country-code": "070",
    "iso_3166-2": "ISO 3166-2:BA",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Botswana",
    "alpha_2": "BW",
    "alpha-3": "BWA",
    "country-code": "072",
    "iso_3166-2": "ISO 3166-2:BW",
    "region": "Africa",
    "sub-region": "Southern Africa",
    "region-code": "002",
    "sub-region-code": "018"
  }, {
    "name": "Bouvet Island",
    "alpha_2": "BV",
    "alpha-3": "BVT",
    "country-code": "074",
    "iso_3166-2": "ISO 3166-2:BV",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Brazil",
    "alpha_2": "BR",
    "alpha-3": "BRA",
    "country-code": "076",
    "iso_3166-2": "ISO 3166-2:BR",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "British Indian Ocean Territory",
    "alpha_2": "IO",
    "alpha-3": "IOT",
    "country-code": "086",
    "iso_3166-2": "ISO 3166-2:IO",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Brunei Darussalam",
    "alpha_2": "BN",
    "alpha-3": "BRN",
    "country-code": "096",
    "iso_3166-2": "ISO 3166-2:BN",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Bulgaria",
    "alpha_2": "BG",
    "alpha-3": "BGR",
    "country-code": "100",
    "iso_3166-2": "ISO 3166-2:BG",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Burkina Faso",
    "alpha_2": "BF",
    "alpha-3": "BFA",
    "country-code": "854",
    "iso_3166-2": "ISO 3166-2:BF",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Burundi",
    "alpha_2": "BI",
    "alpha-3": "BDI",
    "country-code": "108",
    "iso_3166-2": "ISO 3166-2:BI",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Cambodia",
    "alpha_2": "KH",
    "alpha-3": "KHM",
    "country-code": "116",
    "iso_3166-2": "ISO 3166-2:KH",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Cameroon",
    "alpha_2": "CM",
    "alpha-3": "CMR",
    "country-code": "120",
    "iso_3166-2": "ISO 3166-2:CM",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Canada",
    "alpha_2": "CA",
    "alpha-3": "CAN",
    "country-code": "124",
    "iso_3166-2": "ISO 3166-2:CA",
    "region": "Americas",
    "sub-region": "Northern America",
    "region-code": "019",
    "sub-region-code": "021"
  }, {
    "name": "Cabo Verde",
    "alpha_2": "CV",
    "alpha-3": "CPV",
    "country-code": "132",
    "iso_3166-2": "ISO 3166-2:CV",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Cayman Islands",
    "alpha_2": "KY",
    "alpha-3": "CYM",
    "country-code": "136",
    "iso_3166-2": "ISO 3166-2:KY",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Central African Republic",
    "alpha_2": "CF",
    "alpha-3": "CAF",
    "country-code": "140",
    "iso_3166-2": "ISO 3166-2:CF",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Chad",
    "alpha_2": "TD",
    "alpha-3": "TCD",
    "country-code": "148",
    "iso_3166-2": "ISO 3166-2:TD",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Chile",
    "alpha_2": "CL",
    "alpha-3": "CHL",
    "country-code": "152",
    "iso_3166-2": "ISO 3166-2:CL",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "China",
    "alpha_2": "CN",
    "alpha-3": "CHN",
    "country-code": "156",
    "iso_3166-2": "ISO 3166-2:CN",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Christmas Island",
    "alpha_2": "CX",
    "alpha-3": "CXR",
    "country-code": "162",
    "iso_3166-2": "ISO 3166-2:CX",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Cocos (Keeling) Islands",
    "alpha_2": "CC",
    "alpha-3": "CCK",
    "country-code": "166",
    "iso_3166-2": "ISO 3166-2:CC",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Colombia",
    "alpha_2": "CO",
    "alpha-3": "COL",
    "country-code": "170",
    "iso_3166-2": "ISO 3166-2:CO",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Comoros",
    "alpha_2": "KM",
    "alpha-3": "COM",
    "country-code": "174",
    "iso_3166-2": "ISO 3166-2:KM",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Congo",
    "alpha_2": "CG",
    "alpha-3": "COG",
    "country-code": "178",
    "iso_3166-2": "ISO 3166-2:CG",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Congo (Democratic Republic of the)",
    "alpha_2": "CD",
    "alpha-3": "COD",
    "country-code": "180",
    "iso_3166-2": "ISO 3166-2:CD",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Cook Islands",
    "alpha_2": "CK",
    "alpha-3": "COK",
    "country-code": "184",
    "iso_3166-2": "ISO 3166-2:CK",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Costa Rica",
    "alpha_2": "CR",
    "alpha-3": "CRI",
    "country-code": "188",
    "iso_3166-2": "ISO 3166-2:CR",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Côte d'Ivoire",
    "alpha_2": "CI",
    "alpha-3": "CIV",
    "country-code": "384",
    "iso_3166-2": "ISO 3166-2:CI",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Croatia",
    "alpha_2": "HR",
    "alpha-3": "HRV",
    "country-code": "191",
    "iso_3166-2": "ISO 3166-2:HR",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Cuba",
    "alpha_2": "CU",
    "alpha-3": "CUB",
    "country-code": "192",
    "iso_3166-2": "ISO 3166-2:CU",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Curaçao",
    "alpha_2": "CW",
    "alpha-3": "CUW",
    "country-code": "531",
    "iso_3166-2": "ISO 3166-2:CW",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Cyprus",
    "alpha_2": "CY",
    "alpha-3": "CYP",
    "country-code": "196",
    "iso_3166-2": "ISO 3166-2:CY",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Czech Republic",
    "alpha_2": "CZ",
    "alpha-3": "CZE",
    "country-code": "203",
    "iso_3166-2": "ISO 3166-2:CZ",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Denmark",
    "alpha_2": "DK",
    "alpha-3": "DNK",
    "country-code": "208",
    "iso_3166-2": "ISO 3166-2:DK",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Djibouti",
    "alpha_2": "DJ",
    "alpha-3": "DJI",
    "country-code": "262",
    "iso_3166-2": "ISO 3166-2:DJ",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Dominica",
    "alpha_2": "DM",
    "alpha-3": "DMA",
    "country-code": "212",
    "iso_3166-2": "ISO 3166-2:DM",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Dominican Republic",
    "alpha_2": "DO",
    "alpha-3": "DOM",
    "country-code": "214",
    "iso_3166-2": "ISO 3166-2:DO",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Ecuador",
    "alpha_2": "EC",
    "alpha-3": "ECU",
    "country-code": "218",
    "iso_3166-2": "ISO 3166-2:EC",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Egypt",
    "alpha_2": "EG",
    "alpha-3": "EGY",
    "country-code": "818",
    "iso_3166-2": "ISO 3166-2:EG",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "El Salvador",
    "alpha_2": "SV",
    "alpha-3": "SLV",
    "country-code": "222",
    "iso_3166-2": "ISO 3166-2:SV",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Equatorial Guinea",
    "alpha_2": "GQ",
    "alpha-3": "GNQ",
    "country-code": "226",
    "iso_3166-2": "ISO 3166-2:GQ",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Eritrea",
    "alpha_2": "ER",
    "alpha-3": "ERI",
    "country-code": "232",
    "iso_3166-2": "ISO 3166-2:ER",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Estonia",
    "alpha_2": "EE",
    "alpha-3": "EST",
    "country-code": "233",
    "iso_3166-2": "ISO 3166-2:EE",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Ethiopia",
    "alpha_2": "ET",
    "alpha-3": "ETH",
    "country-code": "231",
    "iso_3166-2": "ISO 3166-2:ET",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Falkland Islands (Malvinas)",
    "alpha_2": "FK",
    "alpha-3": "FLK",
    "country-code": "238",
    "iso_3166-2": "ISO 3166-2:FK",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Faroe Islands",
    "alpha_2": "FO",
    "alpha-3": "FRO",
    "country-code": "234",
    "iso_3166-2": "ISO 3166-2:FO",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Fiji",
    "alpha_2": "FJ",
    "alpha-3": "FJI",
    "country-code": "242",
    "iso_3166-2": "ISO 3166-2:FJ",
    "region": "Oceania",
    "sub-region": "Melanesia",
    "region-code": "009",
    "sub-region-code": "054"
  }, {
    "name": "Finland",
    "alpha_2": "FI",
    "alpha-3": "FIN",
    "country-code": "246",
    "iso_3166-2": "ISO 3166-2:FI",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "France",
    "alpha_2": "FR",
    "alpha-3": "FRA",
    "country-code": "250",
    "iso_3166-2": "ISO 3166-2:FR",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "French Guiana",
    "alpha_2": "GF",
    "alpha-3": "GUF",
    "country-code": "254",
    "iso_3166-2": "ISO 3166-2:GF",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "French Polynesia",
    "alpha_2": "PF",
    "alpha-3": "PYF",
    "country-code": "258",
    "iso_3166-2": "ISO 3166-2:PF",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "French Southern Territories",
    "alpha_2": "TF",
    "alpha-3": "ATF",
    "country-code": "260",
    "iso_3166-2": "ISO 3166-2:TF",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Gabon",
    "alpha_2": "GA",
    "alpha-3": "GAB",
    "country-code": "266",
    "iso_3166-2": "ISO 3166-2:GA",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Gambia",
    "alpha_2": "GM",
    "alpha-3": "GMB",
    "country-code": "270",
    "iso_3166-2": "ISO 3166-2:GM",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Georgia",
    "alpha_2": "GE",
    "alpha-3": "GEO",
    "country-code": "268",
    "iso_3166-2": "ISO 3166-2:GE",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Germany",
    "alpha_2": "DE",
    "alpha-3": "DEU",
    "country-code": "276",
    "iso_3166-2": "ISO 3166-2:DE",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Ghana",
    "alpha_2": "GH",
    "alpha-3": "GHA",
    "country-code": "288",
    "iso_3166-2": "ISO 3166-2:GH",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Gibraltar",
    "alpha_2": "GI",
    "alpha-3": "GIB",
    "country-code": "292",
    "iso_3166-2": "ISO 3166-2:GI",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Greece",
    "alpha_2": "GR",
    "alpha-3": "GRC",
    "country-code": "300",
    "iso_3166-2": "ISO 3166-2:GR",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Greenland",
    "alpha_2": "GL",
    "alpha-3": "GRL",
    "country-code": "304",
    "iso_3166-2": "ISO 3166-2:GL",
    "region": "Americas",
    "sub-region": "Northern America",
    "region-code": "019",
    "sub-region-code": "021"
  }, {
    "name": "Grenada",
    "alpha_2": "GD",
    "alpha-3": "GRD",
    "country-code": "308",
    "iso_3166-2": "ISO 3166-2:GD",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Guadeloupe",
    "alpha_2": "GP",
    "alpha-3": "GLP",
    "country-code": "312",
    "iso_3166-2": "ISO 3166-2:GP",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Guam",
    "alpha_2": "GU",
    "alpha-3": "GUM",
    "country-code": "316",
    "iso_3166-2": "ISO 3166-2:GU",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Guatemala",
    "alpha_2": "GT",
    "alpha-3": "GTM",
    "country-code": "320",
    "iso_3166-2": "ISO 3166-2:GT",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Guernsey",
    "alpha_2": "GG",
    "alpha-3": "GGY",
    "country-code": "831",
    "iso_3166-2": "ISO 3166-2:GG",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Guinea",
    "alpha_2": "GN",
    "alpha-3": "GIN",
    "country-code": "324",
    "iso_3166-2": "ISO 3166-2:GN",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Guinea-Bissau",
    "alpha_2": "GW",
    "alpha-3": "GNB",
    "country-code": "624",
    "iso_3166-2": "ISO 3166-2:GW",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Guyana",
    "alpha_2": "GY",
    "alpha-3": "GUY",
    "country-code": "328",
    "iso_3166-2": "ISO 3166-2:GY",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Haiti",
    "alpha_2": "HT",
    "alpha-3": "HTI",
    "country-code": "332",
    "iso_3166-2": "ISO 3166-2:HT",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Heard Island and McDonald Islands",
    "alpha_2": "HM",
    "alpha-3": "HMD",
    "country-code": "334",
    "iso_3166-2": "ISO 3166-2:HM",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Holy See",
    "alpha_2": "VA",
    "alpha-3": "VAT",
    "country-code": "336",
    "iso_3166-2": "ISO 3166-2:VA",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Honduras",
    "alpha_2": "HN",
    "alpha-3": "HND",
    "country-code": "340",
    "iso_3166-2": "ISO 3166-2:HN",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Hong Kong",
    "alpha_2": "HK",
    "alpha-3": "HKG",
    "country-code": "344",
    "iso_3166-2": "ISO 3166-2:HK",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Hungary",
    "alpha_2": "HU",
    "alpha-3": "HUN",
    "country-code": "348",
    "iso_3166-2": "ISO 3166-2:HU",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Iceland",
    "alpha_2": "IS",
    "alpha-3": "ISL",
    "country-code": "352",
    "iso_3166-2": "ISO 3166-2:IS",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "India",
    "alpha_2": "IN",
    "alpha-3": "IND",
    "country-code": "356",
    "iso_3166-2": "ISO 3166-2:IN",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Indonesia",
    "alpha_2": "ID",
    "alpha-3": "IDN",
    "country-code": "360",
    "iso_3166-2": "ISO 3166-2:ID",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Iran (Islamic Republic of)",
    "alpha_2": "IR",
    "alpha-3": "IRN",
    "country-code": "364",
    "iso_3166-2": "ISO 3166-2:IR",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Iraq",
    "alpha_2": "IQ",
    "alpha-3": "IRQ",
    "country-code": "368",
    "iso_3166-2": "ISO 3166-2:IQ",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Ireland",
    "alpha_2": "IE",
    "alpha-3": "IRL",
    "country-code": "372",
    "iso_3166-2": "ISO 3166-2:IE",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Isle of Man",
    "alpha_2": "IM",
    "alpha-3": "IMN",
    "country-code": "833",
    "iso_3166-2": "ISO 3166-2:IM",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Israel",
    "alpha_2": "IL",
    "alpha-3": "ISR",
    "country-code": "376",
    "iso_3166-2": "ISO 3166-2:IL",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Italy",
    "alpha_2": "IT",
    "alpha-3": "ITA",
    "country-code": "380",
    "iso_3166-2": "ISO 3166-2:IT",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Jamaica",
    "alpha_2": "JM",
    "alpha-3": "JAM",
    "country-code": "388",
    "iso_3166-2": "ISO 3166-2:JM",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Japan",
    "alpha_2": "JP",
    "alpha-3": "JPN",
    "country-code": "392",
    "iso_3166-2": "ISO 3166-2:JP",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Jersey",
    "alpha_2": "JE",
    "alpha-3": "JEY",
    "country-code": "832",
    "iso_3166-2": "ISO 3166-2:JE",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Jordan",
    "alpha_2": "JO",
    "alpha-3": "JOR",
    "country-code": "400",
    "iso_3166-2": "ISO 3166-2:JO",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Kazakhstan",
    "alpha_2": "KZ",
    "alpha-3": "KAZ",
    "country-code": "398",
    "iso_3166-2": "ISO 3166-2:KZ",
    "region": "Asia",
    "sub-region": "Central Asia",
    "region-code": "142",
    "sub-region-code": "143"
  }, {
    "name": "Kenya",
    "alpha_2": "KE",
    "alpha-3": "KEN",
    "country-code": "404",
    "iso_3166-2": "ISO 3166-2:KE",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Kiribati",
    "alpha_2": "KI",
    "alpha-3": "KIR",
    "country-code": "296",
    "iso_3166-2": "ISO 3166-2:KI",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Korea (Democratic People's Republic of)",
    "alpha_2": "KP",
    "alpha-3": "PRK",
    "country-code": "408",
    "iso_3166-2": "ISO 3166-2:KP",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Korea (Republic of)",
    "alpha_2": "KR",
    "alpha-3": "KOR",
    "country-code": "410",
    "iso_3166-2": "ISO 3166-2:KR",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Kuwait",
    "alpha_2": "KW",
    "alpha-3": "KWT",
    "country-code": "414",
    "iso_3166-2": "ISO 3166-2:KW",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Kyrgyzstan",
    "alpha_2": "KG",
    "alpha-3": "KGZ",
    "country-code": "417",
    "iso_3166-2": "ISO 3166-2:KG",
    "region": "Asia",
    "sub-region": "Central Asia",
    "region-code": "142",
    "sub-region-code": "143"
  }, {
    "name": "Lao People's Democratic Republic",
    "alpha_2": "LA",
    "alpha-3": "LAO",
    "country-code": "418",
    "iso_3166-2": "ISO 3166-2:LA",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Latvia",
    "alpha_2": "LV",
    "alpha-3": "LVA",
    "country-code": "428",
    "iso_3166-2": "ISO 3166-2:LV",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Lebanon",
    "alpha_2": "LB",
    "alpha-3": "LBN",
    "country-code": "422",
    "iso_3166-2": "ISO 3166-2:LB",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Lesotho",
    "alpha_2": "LS",
    "alpha-3": "LSO",
    "country-code": "426",
    "iso_3166-2": "ISO 3166-2:LS",
    "region": "Africa",
    "sub-region": "Southern Africa",
    "region-code": "002",
    "sub-region-code": "018"
  }, {
    "name": "Liberia",
    "alpha_2": "LR",
    "alpha-3": "LBR",
    "country-code": "430",
    "iso_3166-2": "ISO 3166-2:LR",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Libya",
    "alpha_2": "LY",
    "alpha-3": "LBY",
    "country-code": "434",
    "iso_3166-2": "ISO 3166-2:LY",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "Liechtenstein",
    "alpha_2": "LI",
    "alpha-3": "LIE",
    "country-code": "438",
    "iso_3166-2": "ISO 3166-2:LI",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Lithuania",
    "alpha_2": "LT",
    "alpha-3": "LTU",
    "country-code": "440",
    "iso_3166-2": "ISO 3166-2:LT",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Luxembourg",
    "alpha_2": "LU",
    "alpha-3": "LUX",
    "country-code": "442",
    "iso_3166-2": "ISO 3166-2:LU",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Macao",
    "alpha_2": "MO",
    "alpha-3": "MAC",
    "country-code": "446",
    "iso_3166-2": "ISO 3166-2:MO",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Macedonia (the former Yugoslav Republic of)",
    "alpha_2": "MK",
    "alpha-3": "MKD",
    "country-code": "807",
    "iso_3166-2": "ISO 3166-2:MK",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Madagascar",
    "alpha_2": "MG",
    "alpha-3": "MDG",
    "country-code": "450",
    "iso_3166-2": "ISO 3166-2:MG",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Malawi",
    "alpha_2": "MW",
    "alpha-3": "MWI",
    "country-code": "454",
    "iso_3166-2": "ISO 3166-2:MW",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Malaysia",
    "alpha_2": "MY",
    "alpha-3": "MYS",
    "country-code": "458",
    "iso_3166-2": "ISO 3166-2:MY",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Maldives",
    "alpha_2": "MV",
    "alpha-3": "MDV",
    "country-code": "462",
    "iso_3166-2": "ISO 3166-2:MV",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Mali",
    "alpha_2": "ML",
    "alpha-3": "MLI",
    "country-code": "466",
    "iso_3166-2": "ISO 3166-2:ML",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Malta",
    "alpha_2": "MT",
    "alpha-3": "MLT",
    "country-code": "470",
    "iso_3166-2": "ISO 3166-2:MT",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Marshall Islands",
    "alpha_2": "MH",
    "alpha-3": "MHL",
    "country-code": "584",
    "iso_3166-2": "ISO 3166-2:MH",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Martinique",
    "alpha_2": "MQ",
    "alpha-3": "MTQ",
    "country-code": "474",
    "iso_3166-2": "ISO 3166-2:MQ",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Mauritania",
    "alpha_2": "MR",
    "alpha-3": "MRT",
    "country-code": "478",
    "iso_3166-2": "ISO 3166-2:MR",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Mauritius",
    "alpha_2": "MU",
    "alpha-3": "MUS",
    "country-code": "480",
    "iso_3166-2": "ISO 3166-2:MU",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Mayotte",
    "alpha_2": "YT",
    "alpha-3": "MYT",
    "country-code": "175",
    "iso_3166-2": "ISO 3166-2:YT",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Mexico",
    "alpha_2": "MX",
    "alpha-3": "MEX",
    "country-code": "484",
    "iso_3166-2": "ISO 3166-2:MX",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Micronesia (Federated States of)",
    "alpha_2": "FM",
    "alpha-3": "FSM",
    "country-code": "583",
    "iso_3166-2": "ISO 3166-2:FM",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Moldova (Republic of)",
    "alpha_2": "MD",
    "alpha-3": "MDA",
    "country-code": "498",
    "iso_3166-2": "ISO 3166-2:MD",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Monaco",
    "alpha_2": "MC",
    "alpha-3": "MCO",
    "country-code": "492",
    "iso_3166-2": "ISO 3166-2:MC",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Mongolia",
    "alpha_2": "MN",
    "alpha-3": "MNG",
    "country-code": "496",
    "iso_3166-2": "ISO 3166-2:MN",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Montenegro",
    "alpha_2": "ME",
    "alpha-3": "MNE",
    "country-code": "499",
    "iso_3166-2": "ISO 3166-2:ME",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Montserrat",
    "alpha_2": "MS",
    "alpha-3": "MSR",
    "country-code": "500",
    "iso_3166-2": "ISO 3166-2:MS",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Morocco",
    "alpha_2": "MA",
    "alpha-3": "MAR",
    "country-code": "504",
    "iso_3166-2": "ISO 3166-2:MA",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "Mozambique",
    "alpha_2": "MZ",
    "alpha-3": "MOZ",
    "country-code": "508",
    "iso_3166-2": "ISO 3166-2:MZ",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Myanmar",
    "alpha_2": "MM",
    "alpha-3": "MMR",
    "country-code": "104",
    "iso_3166-2": "ISO 3166-2:MM",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Namibia",
    "alpha_2": "NA",
    "alpha-3": "NAM",
    "country-code": "516",
    "iso_3166-2": "ISO 3166-2:NA",
    "region": "Africa",
    "sub-region": "Southern Africa",
    "region-code": "002",
    "sub-region-code": "018"
  }, {
    "name": "Nauru",
    "alpha_2": "NR",
    "alpha-3": "NRU",
    "country-code": "520",
    "iso_3166-2": "ISO 3166-2:NR",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Nepal",
    "alpha_2": "NP",
    "alpha-3": "NPL",
    "country-code": "524",
    "iso_3166-2": "ISO 3166-2:NP",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Netherlands",
    "alpha_2": "NL",
    "alpha-3": "NLD",
    "country-code": "528",
    "iso_3166-2": "ISO 3166-2:NL",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "New Caledonia",
    "alpha_2": "NC",
    "alpha-3": "NCL",
    "country-code": "540",
    "iso_3166-2": "ISO 3166-2:NC",
    "region": "Oceania",
    "sub-region": "Melanesia",
    "region-code": "009",
    "sub-region-code": "054"
  }, {
    "name": "New Zealand",
    "alpha_2": "NZ",
    "alpha-3": "NZL",
    "country-code": "554",
    "iso_3166-2": "ISO 3166-2:NZ",
    "region": "Oceania",
    "sub-region": "Australia and New Zealand",
    "region-code": "009",
    "sub-region-code": "053"
  }, {
    "name": "Nicaragua",
    "alpha_2": "NI",
    "alpha-3": "NIC",
    "country-code": "558",
    "iso_3166-2": "ISO 3166-2:NI",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Niger",
    "alpha_2": "NE",
    "alpha-3": "NER",
    "country-code": "562",
    "iso_3166-2": "ISO 3166-2:NE",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Nigeria",
    "alpha_2": "NG",
    "alpha-3": "NGA",
    "country-code": "566",
    "iso_3166-2": "ISO 3166-2:NG",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Niue",
    "alpha_2": "NU",
    "alpha-3": "NIU",
    "country-code": "570",
    "iso_3166-2": "ISO 3166-2:NU",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Norfolk Island",
    "alpha_2": "NF",
    "alpha-3": "NFK",
    "country-code": "574",
    "iso_3166-2": "ISO 3166-2:NF",
    "region": "Oceania",
    "sub-region": "Australia and New Zealand",
    "region-code": "009",
    "sub-region-code": "053"
  }, {
    "name": "Northern Mariana Islands",
    "alpha_2": "MP",
    "alpha-3": "MNP",
    "country-code": "580",
    "iso_3166-2": "ISO 3166-2:MP",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Norway",
    "alpha_2": "NO",
    "alpha-3": "NOR",
    "country-code": "578",
    "iso_3166-2": "ISO 3166-2:NO",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Oman",
    "alpha_2": "OM",
    "alpha-3": "OMN",
    "country-code": "512",
    "iso_3166-2": "ISO 3166-2:OM",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Pakistan",
    "alpha_2": "PK",
    "alpha-3": "PAK",
    "country-code": "586",
    "iso_3166-2": "ISO 3166-2:PK",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Palau",
    "alpha_2": "PW",
    "alpha-3": "PLW",
    "country-code": "585",
    "iso_3166-2": "ISO 3166-2:PW",
    "region": "Oceania",
    "sub-region": "Micronesia",
    "region-code": "009",
    "sub-region-code": "057"
  }, {
    "name": "Palestine, State of",
    "alpha_2": "PS",
    "alpha-3": "PSE",
    "country-code": "275",
    "iso_3166-2": "ISO 3166-2:PS",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Panama",
    "alpha_2": "PA",
    "alpha-3": "PAN",
    "country-code": "591",
    "iso_3166-2": "ISO 3166-2:PA",
    "region": "Americas",
    "sub-region": "Central America",
    "region-code": "019",
    "sub-region-code": "013"
  }, {
    "name": "Papua New Guinea",
    "alpha_2": "PG",
    "alpha-3": "PNG",
    "country-code": "598",
    "iso_3166-2": "ISO 3166-2:PG",
    "region": "Oceania",
    "sub-region": "Melanesia",
    "region-code": "009",
    "sub-region-code": "054"
  }, {
    "name": "Paraguay",
    "alpha_2": "PY",
    "alpha-3": "PRY",
    "country-code": "600",
    "iso_3166-2": "ISO 3166-2:PY",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Peru",
    "alpha_2": "PE",
    "alpha-3": "PER",
    "country-code": "604",
    "iso_3166-2": "ISO 3166-2:PE",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Philippines",
    "alpha_2": "PH",
    "alpha-3": "PHL",
    "country-code": "608",
    "iso_3166-2": "ISO 3166-2:PH",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Pitcairn",
    "alpha_2": "PN",
    "alpha-3": "PCN",
    "country-code": "612",
    "iso_3166-2": "ISO 3166-2:PN",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Poland",
    "alpha_2": "PL",
    "alpha-3": "POL",
    "country-code": "616",
    "iso_3166-2": "ISO 3166-2:PL",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Portugal",
    "alpha_2": "PT",
    "alpha-3": "PRT",
    "country-code": "620",
    "iso_3166-2": "ISO 3166-2:PT",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Puerto Rico",
    "alpha_2": "PR",
    "alpha-3": "PRI",
    "country-code": "630",
    "iso_3166-2": "ISO 3166-2:PR",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Qatar",
    "alpha_2": "QA",
    "alpha-3": "QAT",
    "country-code": "634",
    "iso_3166-2": "ISO 3166-2:QA",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Réunion",
    "alpha_2": "RE",
    "alpha-3": "REU",
    "country-code": "638",
    "iso_3166-2": "ISO 3166-2:RE",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Romania",
    "alpha_2": "RO",
    "alpha-3": "ROU",
    "country-code": "642",
    "iso_3166-2": "ISO 3166-2:RO",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Russian Federation",
    "alpha_2": "RU",
    "alpha-3": "RUS",
    "country-code": "643",
    "iso_3166-2": "ISO 3166-2:RU",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Rwanda",
    "alpha_2": "RW",
    "alpha-3": "RWA",
    "country-code": "646",
    "iso_3166-2": "ISO 3166-2:RW",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Saint Barthélemy",
    "alpha_2": "BL",
    "alpha-3": "BLM",
    "country-code": "652",
    "iso_3166-2": "ISO 3166-2:BL",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha_2": "SH",
    "alpha-3": "SHN",
    "country-code": "654",
    "iso_3166-2": "ISO 3166-2:SH",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Saint Kitts and Nevis",
    "alpha_2": "KN",
    "alpha-3": "KNA",
    "country-code": "659",
    "iso_3166-2": "ISO 3166-2:KN",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Saint Lucia",
    "alpha_2": "LC",
    "alpha-3": "LCA",
    "country-code": "662",
    "iso_3166-2": "ISO 3166-2:LC",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Saint Martin (French part)",
    "alpha_2": "MF",
    "alpha-3": "MAF",
    "country-code": "663",
    "iso_3166-2": "ISO 3166-2:MF",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Saint Pierre and Miquelon",
    "alpha_2": "PM",
    "alpha-3": "SPM",
    "country-code": "666",
    "iso_3166-2": "ISO 3166-2:PM",
    "region": "Americas",
    "sub-region": "Northern America",
    "region-code": "019",
    "sub-region-code": "021"
  }, {
    "name": "Saint Vincent and the Grenadines",
    "alpha_2": "VC",
    "alpha-3": "VCT",
    "country-code": "670",
    "iso_3166-2": "ISO 3166-2:VC",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Samoa",
    "alpha_2": "WS",
    "alpha-3": "WSM",
    "country-code": "882",
    "iso_3166-2": "ISO 3166-2:WS",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "San Marino",
    "alpha_2": "SM",
    "alpha-3": "SMR",
    "country-code": "674",
    "iso_3166-2": "ISO 3166-2:SM",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Sao Tome and Principe",
    "alpha_2": "ST",
    "alpha-3": "STP",
    "country-code": "678",
    "iso_3166-2": "ISO 3166-2:ST",
    "region": "Africa",
    "sub-region": "Middle Africa",
    "region-code": "002",
    "sub-region-code": "017"
  }, {
    "name": "Saudi Arabia",
    "alpha_2": "SA",
    "alpha-3": "SAU",
    "country-code": "682",
    "iso_3166-2": "ISO 3166-2:SA",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Senegal",
    "alpha_2": "SN",
    "alpha-3": "SEN",
    "country-code": "686",
    "iso_3166-2": "ISO 3166-2:SN",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Serbia",
    "alpha_2": "RS",
    "alpha-3": "SRB",
    "country-code": "688",
    "iso_3166-2": "ISO 3166-2:RS",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Seychelles",
    "alpha_2": "SC",
    "alpha-3": "SYC",
    "country-code": "690",
    "iso_3166-2": "ISO 3166-2:SC",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Sierra Leone",
    "alpha_2": "SL",
    "alpha-3": "SLE",
    "country-code": "694",
    "iso_3166-2": "ISO 3166-2:SL",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Singapore",
    "alpha_2": "SG",
    "alpha-3": "SGP",
    "country-code": "702",
    "iso_3166-2": "ISO 3166-2:SG",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Sint Maarten (Dutch part)",
    "alpha_2": "SX",
    "alpha-3": "SXM",
    "country-code": "534",
    "iso_3166-2": "ISO 3166-2:SX",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Slovakia",
    "alpha_2": "SK",
    "alpha-3": "SVK",
    "country-code": "703",
    "iso_3166-2": "ISO 3166-2:SK",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "Slovenia",
    "alpha_2": "SI",
    "alpha-3": "SVN",
    "country-code": "705",
    "iso_3166-2": "ISO 3166-2:SI",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Solomon Islands",
    "alpha_2": "SB",
    "alpha-3": "SLB",
    "country-code": "090",
    "iso_3166-2": "ISO 3166-2:SB",
    "region": "Oceania",
    "sub-region": "Melanesia",
    "region-code": "009",
    "sub-region-code": "054"
  }, {
    "name": "Somalia",
    "alpha_2": "SO",
    "alpha-3": "SOM",
    "country-code": "706",
    "iso_3166-2": "ISO 3166-2:SO",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "South Africa",
    "alpha_2": "ZA",
    "alpha-3": "ZAF",
    "country-code": "710",
    "iso_3166-2": "ISO 3166-2:ZA",
    "region": "Africa",
    "sub-region": "Southern Africa",
    "region-code": "002",
    "sub-region-code": "018"
  }, {
    "name": "South Georgia and the South Sandwich Islands",
    "alpha_2": "GS",
    "alpha-3": "SGS",
    "country-code": "239",
    "iso_3166-2": "ISO 3166-2:GS",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "South Sudan",
    "alpha_2": "SS",
    "alpha-3": "SSD",
    "country-code": "728",
    "iso_3166-2": "ISO 3166-2:SS",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Spain",
    "alpha_2": "ES",
    "alpha-3": "ESP",
    "country-code": "724",
    "iso_3166-2": "ISO 3166-2:ES",
    "region": "Europe",
    "sub-region": "Southern Europe",
    "region-code": "150",
    "sub-region-code": "039"
  }, {
    "name": "Sri Lanka",
    "alpha_2": "LK",
    "alpha-3": "LKA",
    "country-code": "144",
    "iso_3166-2": "ISO 3166-2:LK",
    "region": "Asia",
    "sub-region": "Southern Asia",
    "region-code": "142",
    "sub-region-code": "034"
  }, {
    "name": "Sudan",
    "alpha_2": "SD",
    "alpha-3": "SDN",
    "country-code": "729",
    "iso_3166-2": "ISO 3166-2:SD",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "Suriname",
    "alpha_2": "SR",
    "alpha-3": "SUR",
    "country-code": "740",
    "iso_3166-2": "ISO 3166-2:SR",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Svalbard and Jan Mayen",
    "alpha_2": "SJ",
    "alpha-3": "SJM",
    "country-code": "744",
    "iso_3166-2": "ISO 3166-2:SJ",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Swaziland",
    "alpha_2": "SZ",
    "alpha-3": "SWZ",
    "country-code": "748",
    "iso_3166-2": "ISO 3166-2:SZ",
    "region": "Africa",
    "sub-region": "Southern Africa",
    "region-code": "002",
    "sub-region-code": "018"
  }, {
    "name": "Sweden",
    "alpha_2": "SE",
    "alpha-3": "SWE",
    "country-code": "752",
    "iso_3166-2": "ISO 3166-2:SE",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "Switzerland",
    "alpha_2": "CH",
    "alpha-3": "CHE",
    "country-code": "756",
    "iso_3166-2": "ISO 3166-2:CH",
    "region": "Europe",
    "sub-region": "Western Europe",
    "region-code": "150",
    "sub-region-code": "155"
  }, {
    "name": "Syrian Arab Republic",
    "alpha_2": "SY",
    "alpha-3": "SYR",
    "country-code": "760",
    "iso_3166-2": "ISO 3166-2:SY",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Taiwan, Province of China",
    "alpha_2": "TW",
    "alpha-3": "TWN",
    "country-code": "158",
    "iso_3166-2": "ISO 3166-2:TW",
    "region": "Asia",
    "sub-region": "Eastern Asia",
    "region-code": "142",
    "sub-region-code": "030"
  }, {
    "name": "Tajikistan",
    "alpha_2": "TJ",
    "alpha-3": "TJK",
    "country-code": "762",
    "iso_3166-2": "ISO 3166-2:TJ",
    "region": "Asia",
    "sub-region": "Central Asia",
    "region-code": "142",
    "sub-region-code": "143"
  }, {
    "name": "Tanzania, United Republic of",
    "alpha_2": "TZ",
    "alpha-3": "TZA",
    "country-code": "834",
    "iso_3166-2": "ISO 3166-2:TZ",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Thailand",
    "alpha_2": "TH",
    "alpha-3": "THA",
    "country-code": "764",
    "iso_3166-2": "ISO 3166-2:TH",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Timor-Leste",
    "alpha_2": "TL",
    "alpha-3": "TLS",
    "country-code": "626",
    "iso_3166-2": "ISO 3166-2:TL",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Togo",
    "alpha_2": "TG",
    "alpha-3": "TGO",
    "country-code": "768",
    "iso_3166-2": "ISO 3166-2:TG",
    "region": "Africa",
    "sub-region": "Western Africa",
    "region-code": "002",
    "sub-region-code": "011"
  }, {
    "name": "Tokelau",
    "alpha_2": "TK",
    "alpha-3": "TKL",
    "country-code": "772",
    "iso_3166-2": "ISO 3166-2:TK",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Tonga",
    "alpha_2": "TO",
    "alpha-3": "TON",
    "country-code": "776",
    "iso_3166-2": "ISO 3166-2:TO",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Trinidad and Tobago",
    "alpha_2": "TT",
    "alpha-3": "TTO",
    "country-code": "780",
    "iso_3166-2": "ISO 3166-2:TT",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Tunisia",
    "alpha_2": "TN",
    "alpha-3": "TUN",
    "country-code": "788",
    "iso_3166-2": "ISO 3166-2:TN",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "Turkey",
    "alpha_2": "TR",
    "alpha-3": "TUR",
    "country-code": "792",
    "iso_3166-2": "ISO 3166-2:TR",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Turkmenistan",
    "alpha_2": "TM",
    "alpha-3": "TKM",
    "country-code": "795",
    "iso_3166-2": "ISO 3166-2:TM",
    "region": "Asia",
    "sub-region": "Central Asia",
    "region-code": "142",
    "sub-region-code": "143"
  }, {
    "name": "Turks and Caicos Islands",
    "alpha_2": "TC",
    "alpha-3": "TCA",
    "country-code": "796",
    "iso_3166-2": "ISO 3166-2:TC",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Tuvalu",
    "alpha_2": "TV",
    "alpha-3": "TUV",
    "country-code": "798",
    "iso_3166-2": "ISO 3166-2:TV",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Uganda",
    "alpha_2": "UG",
    "alpha-3": "UGA",
    "country-code": "800",
    "iso_3166-2": "ISO 3166-2:UG",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Ukraine",
    "alpha_2": "UA",
    "alpha-3": "UKR",
    "country-code": "804",
    "iso_3166-2": "ISO 3166-2:UA",
    "region": "Europe",
    "sub-region": "Eastern Europe",
    "region-code": "150",
    "sub-region-code": "151"
  }, {
    "name": "United Arab Emirates",
    "alpha_2": "AE",
    "alpha-3": "ARE",
    "country-code": "784",
    "iso_3166-2": "ISO 3166-2:AE",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "alpha_2": "GB",
    "alpha-3": "GBR",
    "country-code": "826",
    "iso_3166-2": "ISO 3166-2:GB",
    "region": "Europe",
    "sub-region": "Northern Europe",
    "region-code": "150",
    "sub-region-code": "154"
  }, {
    "name": "United States of America",
    "alpha_2": "US",
    "alpha-3": "USA",
    "country-code": "840",
    "iso_3166-2": "ISO 3166-2:US",
    "region": "Americas",
    "sub-region": "Northern America",
    "region-code": "019",
    "sub-region-code": "021"
  }, {
    "name": "United States Minor Outlying Islands",
    "alpha_2": "UM",
    "alpha-3": "UMI",
    "country-code": "581",
    "iso_3166-2": "ISO 3166-2:UM",
    "sub-region-code": null,
    "region-code": null,
    "sub-region": null,
    "region": null
  }, {
    "name": "Uruguay",
    "alpha_2": "UY",
    "alpha-3": "URY",
    "country-code": "858",
    "iso_3166-2": "ISO 3166-2:UY",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Uzbekistan",
    "alpha_2": "UZ",
    "alpha-3": "UZB",
    "country-code": "860",
    "iso_3166-2": "ISO 3166-2:UZ",
    "region": "Asia",
    "sub-region": "Central Asia",
    "region-code": "142",
    "sub-region-code": "143"
  }, {
    "name": "Vanuatu",
    "alpha_2": "VU",
    "alpha-3": "VUT",
    "country-code": "548",
    "iso_3166-2": "ISO 3166-2:VU",
    "region": "Oceania",
    "sub-region": "Melanesia",
    "region-code": "009",
    "sub-region-code": "054"
  }, {
    "name": "Venezuela (Bolivarian Republic of)",
    "alpha_2": "VE",
    "alpha-3": "VEN",
    "country-code": "862",
    "iso_3166-2": "ISO 3166-2:VE",
    "region": "Americas",
    "sub-region": "South America",
    "region-code": "019",
    "sub-region-code": "005"
  }, {
    "name": "Viet Nam",
    "alpha_2": "VN",
    "alpha-3": "VNM",
    "country-code": "704",
    "iso_3166-2": "ISO 3166-2:VN",
    "region": "Asia",
    "sub-region": "South-Eastern Asia",
    "region-code": "142",
    "sub-region-code": "035"
  }, {
    "name": "Virgin Islands (British)",
    "alpha_2": "VG",
    "alpha-3": "VGB",
    "country-code": "092",
    "iso_3166-2": "ISO 3166-2:VG",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Virgin Islands (U.S.)",
    "alpha_2": "VI",
    "alpha-3": "VIR",
    "country-code": "850",
    "iso_3166-2": "ISO 3166-2:VI",
    "region": "Americas",
    "sub-region": "Caribbean",
    "region-code": "019",
    "sub-region-code": "029"
  }, {
    "name": "Wallis and Futuna",
    "alpha_2": "WF",
    "alpha-3": "WLF",
    "country-code": "876",
    "iso_3166-2": "ISO 3166-2:WF",
    "region": "Oceania",
    "sub-region": "Polynesia",
    "region-code": "009",
    "sub-region-code": "061"
  }, {
    "name": "Western Sahara",
    "alpha_2": "EH",
    "alpha-3": "ESH",
    "country-code": "732",
    "iso_3166-2": "ISO 3166-2:EH",
    "region": "Africa",
    "sub-region": "Northern Africa",
    "region-code": "002",
    "sub-region-code": "015"
  }, {
    "name": "Yemen",
    "alpha_2": "YE",
    "alpha-3": "YEM",
    "country-code": "887",
    "iso_3166-2": "ISO 3166-2:YE",
    "region": "Asia",
    "sub-region": "Western Asia",
    "region-code": "142",
    "sub-region-code": "145"
  }, {
    "name": "Zambia",
    "alpha_2": "ZM",
    "alpha-3": "ZMB",
    "country-code": "894",
    "iso_3166-2": "ISO 3166-2:ZM",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }, {
    "name": "Zimbabwe",
    "alpha_2": "ZW",
    "alpha-3": "ZWE",
    "country-code": "716",
    "iso_3166-2": "ISO 3166-2:ZW",
    "region": "Africa",
    "sub-region": "Eastern Africa",
    "region-code": "002",
    "sub-region-code": "014"
  }]

  var dataByCode = new Array();
  for (var i = 0; i < data.length; i++) dataByCode[data[i].alpha_2.toLowerCase()] = data[i];

  var dataByName = new Array();
  for (var i = 0; i < data.length; i++) dataByName[data[i].name.toLowerCase()] = data[i];

  this.search = function(name) {
    if (!name) return "us";
    if (name.length == 2) return name;
    name = dataByName[name.toLowerCase()];
    if (!name) return "us";
    return name.alpha_2.toLowerCase();
  }
}
