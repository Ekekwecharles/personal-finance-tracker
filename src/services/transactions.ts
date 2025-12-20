"use client";

// import { add, format } from "date-fns";
// import { faker } from "@faker-js/faker";
import { getTransactionsMessages } from "../firebase/apiFirebase";

const transactionData = [
  {
    id: "TRANS-2",
    date: "2025-11-19 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "16200.00",
    sender: "Vincent Deckow",
    receiver: null,
    referenceCode: "23lFOCw6mdlc9Lru",
    accountNumber: "62978597",
    location: "Libyan Arab Jamahiriya",
    balanceAfterTransaction: "8700.00",
  },
  {
    id: "TRANS-73",
    date: "2025-11-19 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "8300.00",
    sender: null,
    receiver: "Ankunding - Crona",
    referenceCode: "JwGf4xsl8KgDoawG",
    accountNumber: "25623805",
    location: "Panama",
    balanceAfterTransaction: "39000.00",
  },
  {
    id: "TRANS-9",
    date: "2025-11-20 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "2000.00",
    sender: "Clarence Berge",
    receiver: null,
    referenceCode: "aMzeO9eUPKGKu6ZY",
    accountNumber: "96428095",
    location: "Yemen",
    balanceAfterTransaction: "-23600.00",
  },
  {
    id: "TRANS-30",
    date: "2025-11-20 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10000.00",
    sender: null,
    receiver: "Rutherford Group",
    referenceCode: "pnlHVSmQ5H5lZmZv",
    accountNumber: "68122205",
    location: "Latvia",
    balanceAfterTransaction: "-76800.00",
  },
  {
    id: "TRANS-35",
    date: "2025-11-20 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "13400.00",
    sender: "Scott Bosco-Kovacek",
    receiver: null,
    referenceCode: "DYzdRdPSM6EW6VGO",
    accountNumber: "24521458",
    location: "Bulgaria",
    balanceAfterTransaction: "-54100.00",
  },
  {
    id: "TRANS-43",
    date: "2025-11-20 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "10800.00",
    sender: "Rippin LLC",
    receiver: null,
    referenceCode: "oWm9lt07hmOyFKR4",
    accountNumber: "93806456",
    location: "Lao People's Democratic Republic",
    balanceAfterTransaction: "-22900.00",
  },
  {
    id: "TRANS-16",
    date: "2025-11-21 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "6500.00",
    sender: null,
    receiver: "Gloria Carter-Goldner",
    referenceCode: "d1E2xeeD9z13LpzP",
    accountNumber: "82953900",
    location: "Fiji",
    balanceAfterTransaction: "-67600.00",
  },
  {
    id: "TRANS-20",
    date: "2025-11-21 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "13800.00",
    sender: null,
    receiver: "Nicholas Brown",
    referenceCode: "DPt3ElEyDnfLI0A5",
    accountNumber: "41728138",
    location: "Portugal",
    balanceAfterTransaction: "-61200.00",
  },
  {
    id: "TRANS-68",
    date: "2025-11-21 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "7600.00",
    sender: "May Wolff",
    receiver: null,
    referenceCode: "FlxidSjowqMrjBjz",
    accountNumber: "70275715",
    location: "United States of America",
    balanceAfterTransaction: "30700.00",
  },
  {
    id: "TRANS-28",
    date: "2025-11-23 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "10700.00",
    sender: "Windler and Sons",
    receiver: null,
    referenceCode: "qRUidvKrdThwVZKY",
    accountNumber: "21603265",
    location: "Guatemala",
    balanceAfterTransaction: "-49200.00",
  },
  {
    id: "TRANS-33",
    date: "2025-11-23 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "18100.00",
    sender: null,
    receiver: "Schinner - Langworth",
    referenceCode: "YGelejKFn7aZZ9Sv",
    accountNumber: "72118415",
    location: "Mauritius",
    balanceAfterTransaction: "-85300.00",
  },
  {
    id: "TRANS-70",
    date: "2025-11-23 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "16100.00",
    sender: "Angel Schamberger",
    receiver: null,
    referenceCode: "N0jUOPq3UJU6pZ2E",
    accountNumber: "90507347",
    location: "French Polynesia",
    balanceAfterTransaction: "40600.00",
  },
  {
    id: "TRANS-31",
    date: "2025-11-24 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "7800.00",
    sender: "Nolan Group",
    receiver: null,
    referenceCode: "IMUA2k9upkg8D7Vz",
    accountNumber: "16882937",
    location: "French Polynesia",
    balanceAfterTransaction: "-69000.00",
  },
  {
    id: "TRANS-8",
    date: "2025-11-25 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "10900.00",
    sender: null,
    receiver: "Wintheiser, Streich and Raynor",
    referenceCode: "nws7agXUBmxz7V0L",
    accountNumber: "51604377",
    location: "Cyprus",
    balanceAfterTransaction: "-25600.00",
  },
  {
    id: "TRANS-27",
    date: "2025-11-25 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "6000.00",
    sender: null,
    receiver: "Berge, Block and Gerhold",
    referenceCode: "BSg7DDcNADQaPeIK",
    accountNumber: "78479967",
    location: "Uzbekistan",
    balanceAfterTransaction: "-59900.00",
  },
  {
    id: "TRANS-52",
    date: "2025-11-25 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "12200.00",
    sender: "Zemlak - Renner",
    receiver: null,
    referenceCode: "tA1Xbri5fgAeodKe",
    accountNumber: "01028195",
    location: "Bermuda",
    balanceAfterTransaction: "15900.00",
  },
  {
    id: "TRANS-57",
    date: "2025-11-25 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "4000.00",
    sender: null,
    receiver: "Brent Donnelly-Douglas",
    referenceCode: "2Y1zCOjNlx4VhcKw",
    accountNumber: "24030987",
    location: "Finland",
    balanceAfterTransaction: "15600.00",
  },
  {
    id: "TRANS-79",
    date: "2025-11-25 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "19300.00",
    sender: "Pollich - Champlin",
    receiver: null,
    referenceCode: "F6ETYrZJv1ipjGPK",
    accountNumber: "15293641",
    location: "Italy",
    balanceAfterTransaction: "59300.00",
  },
  {
    id: "TRANS-22",
    date: "2025-11-26 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "10400.00",
    sender: null,
    receiver: "Hintz, Quigley and Connelly",
    referenceCode: "B5XNfb7jYQA0EY48",
    accountNumber: "82425706",
    location: "Guinea-Bissau",
    balanceAfterTransaction: "-59100.00",
  },
  {
    id: "TRANS-74",
    date: "2025-11-26 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "4100.00",
    sender: "Okuneva and Sons",
    receiver: null,
    referenceCode: "gOskujgGu34IjcpV",
    accountNumber: "95180683",
    location: "Comoros",
    balanceAfterTransaction: "43100.00",
  },
  {
    id: "TRANS-19",
    date: "2025-11-27 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "4700.00",
    sender: "Conn, Beier and Pfannerstill",
    receiver: null,
    referenceCode: "TLXOnKnbe5vTLx07",
    accountNumber: "94980319",
    location: "Austria",
    balanceAfterTransaction: "-47400.00",
  },
  {
    id: "TRANS-12",
    date: "2025-11-28 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "1400.00",
    sender: "Farrell Inc",
    receiver: null,
    referenceCode: "loOwDmkf3b0eGCs2",
    accountNumber: "05174535",
    location: "Timor-Leste",
    balanceAfterTransaction: "-58700.00",
  },
  {
    id: "TRANS-29",
    date: "2025-11-28 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "17600.00",
    sender: null,
    receiver: "Seth Wunsch",
    referenceCode: "DSsDfMTl28bVS71T",
    accountNumber: "99995987",
    location: "Lesotho",
    balanceAfterTransaction: "-66800.00",
  },
  {
    id: "TRANS-63",
    date: "2025-11-28 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "3900.00",
    sender: "Gerardo Herzog",
    receiver: null,
    referenceCode: "IV7Mguv5XUjF2gIT",
    accountNumber: "31295028",
    location: "Holy See (Vatican City State)",
    balanceAfterTransaction: "26500.00",
  },
  {
    id: "TRANS-76",
    date: "2025-11-28 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "4900.00",
    sender: "Boehm - Franecki",
    receiver: null,
    referenceCode: "OwovMx4ySM2kpSkW",
    accountNumber: "83060926",
    location: "Ireland",
    balanceAfterTransaction: "45700.00",
  },
  {
    id: "TRANS-7",
    date: "2025-11-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "7700.00",
    sender: "Mr. Leon Bartell",
    receiver: null,
    referenceCode: "TKV5quRwd38H0aqk",
    accountNumber: "91278430",
    location: "Jordan",
    balanceAfterTransaction: "-14700.00",
  },
  {
    id: "TRANS-14",
    date: "2025-11-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "12600.00",
    sender: "Miguel Kohler MD",
    receiver: null,
    referenceCode: "JUjSYznoOULTCDMF",
    accountNumber: "56856793",
    location: "Syrian Arab Republic",
    balanceAfterTransaction: "-50100.00",
  },
  {
    id: "TRANS-36",
    date: "2025-11-29 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "5400.00",
    sender: "Paul Jacobi",
    receiver: null,
    referenceCode: "ukJXfVi6u5mTy7fz",
    accountNumber: "37154190",
    location: "Armenia",
    balanceAfterTransaction: "-48700.00",
  },
  {
    id: "TRANS-48",
    date: "2025-11-29 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "18400.00",
    sender: "Hane Group",
    receiver: null,
    referenceCode: "0VfAtLyzVeaM2yfK",
    accountNumber: "36163918",
    location: "Bolivia",
    balanceAfterTransaction: "7900.00",
  },
  {
    id: "TRANS-13",
    date: "2025-11-30 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "4000.00",
    sender: null,
    receiver: "Renner, Jones and Hansen",
    referenceCode: "Tu5kv9MbUbtFoT2Y",
    accountNumber: "59423088",
    location: "Saudi Arabia",
    balanceAfterTransaction: "-62700.00",
  },
  {
    id: "TRANS-47",
    date: "2025-11-30 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "13300.00",
    sender: "Alan Schamberger",
    receiver: null,
    referenceCode: "WOoIIZ80TUuTbeb9",
    accountNumber: "16992246",
    location: "Palestine",
    balanceAfterTransaction: "-10500.00",
  },
  {
    id: "TRANS-6",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "19000.00",
    sender: null,
    receiver: "Kim McLaughlin",
    referenceCode: "fXgo6vr3XhgBlObj",
    accountNumber: "67724196",
    location: "Gabon",
    balanceAfterTransaction: "-22400.00",
  },
  {
    id: "TRANS-17",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "11200.00",
    sender: "Corwin, Langworth and Homenick",
    receiver: null,
    referenceCode: "z6Z9jBsnexlIjZEh",
    accountNumber: "31379944",
    location: "Saint Martin",
    balanceAfterTransaction: "-56400.00",
  },
  {
    id: "TRANS-40",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "2500.00",
    sender: null,
    receiver: "Mitchell LLC",
    referenceCode: "x6Rw8YedezfQSqtf",
    accountNumber: "70524045",
    location: "Oman",
    balanceAfterTransaction: "-58100.00",
  },
  {
    id: "TRANS-46",
    date: "2025-12-01 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "800.00",
    sender: null,
    receiver: "Herman Shields",
    referenceCode: "s0Non0ecHFLBjt7w",
    accountNumber: "87944341",
    location: "Antarctica",
    balanceAfterTransaction: "-23800.00",
  },
  {
    id: "TRANS-51",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "17300.00",
    sender: "Dr. Delbert Bauch",
    receiver: null,
    referenceCode: "nE14PWZcP6vLYpQF",
    accountNumber: "35873401",
    location: "Latvia",
    balanceAfterTransaction: "3700.00",
  },
  {
    id: "TRANS-60",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "6300.00",
    sender: "Myron Carter",
    receiver: null,
    referenceCode: "LWg8GZaPmUE2mEGV",
    accountNumber: "62032714",
    location: "American Samoa",
    balanceAfterTransaction: "41400.00",
  },
  {
    id: "TRANS-65",
    date: "2025-12-01 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "3800.00",
    sender: null,
    receiver: "Neil Hane I",
    referenceCode: "w4MKMIXZXtaE4Xjg",
    accountNumber: "34926586",
    location: "Somalia",
    balanceAfterTransaction: "9600.00",
  },
  {
    id: "TRANS-15",
    date: "2025-12-02 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "11000.00",
    sender: null,
    receiver: "Johnson Group",
    referenceCode: "HJY2Jgo3hr65yeeQ",
    accountNumber: "36613215",
    location: "Liberia",
    balanceAfterTransaction: "-61100.00",
  },
  {
    id: "TRANS-78",
    date: "2025-12-02 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "900.00",
    sender: "Jast - Rau",
    receiver: null,
    referenceCode: "qEFTUp41oQBnfNM9",
    accountNumber: "35144232",
    location: "Malta",
    balanceAfterTransaction: "40000.00",
  },
  {
    id: "TRANS-25",
    date: "2025-12-03 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "6200.00",
    sender: "Grace Doyle",
    receiver: null,
    referenceCode: "fiCVysu6rTGkkpXm",
    accountNumber: "38920912",
    location: "Togo",
    balanceAfterTransaction: "-56400.00",
  },
  {
    id: "TRANS-26",
    date: "2025-12-03 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2500.00",
    sender: "Christiansen - Tremblay",
    receiver: null,
    referenceCode: "H9u9NXs1mMaYYsft",
    accountNumber: "32657092",
    location: "Sao Tome and Principe",
    balanceAfterTransaction: "-53900.00",
  },
  {
    id: "TRANS-37",
    date: "2025-12-03 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "8300.00",
    sender: null,
    receiver: "Kuhlman and Sons",
    referenceCode: "GfBes2rIeOIO569Q",
    accountNumber: "02832409",
    location: "Nigeria",
    balanceAfterTransaction: "-57000.00",
  },
  {
    id: "TRANS-45",
    date: "2025-12-03 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "14500.00",
    sender: "Ortiz - Rippin",
    receiver: null,
    referenceCode: "pZx6rz5itPT51Str",
    accountNumber: "10421933",
    location: "South Sudan",
    balanceAfterTransaction: "-23000.00",
  },
  {
    id: "TRANS-61",
    date: "2025-12-03 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "14700.00",
    sender: null,
    receiver: "Chris Balistreri",
    referenceCode: "11EmQdUP97nBmQcj",
    accountNumber: "85652906",
    location: "Palau",
    balanceAfterTransaction: "26700.00",
  },
  {
    id: "TRANS-72",
    date: "2025-12-03 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "900.00",
    sender: "Ledner Inc",
    receiver: null,
    referenceCode: "6JAmBX8vjWYs2y9W",
    accountNumber: "70488640",
    location: "Jersey",
    balanceAfterTransaction: "47300.00",
  },
  {
    id: "TRANS-56",
    date: "2025-12-04 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "10400.00",
    sender: null,
    receiver: "Sauer Group",
    referenceCode: "SmdNYX1Mg6DNBdyy",
    accountNumber: "47995038",
    location: "Lesotho",
    balanceAfterTransaction: "19600.00",
  },
  {
    id: "TRANS-62",
    date: "2025-12-04 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "4100.00",
    sender: null,
    receiver: "Kuhn, Homenick and Bailey",
    referenceCode: "CIMWATPR8D2v37WH",
    accountNumber: "27545280",
    location: "Falkland Islands (Malvinas)",
    balanceAfterTransaction: "22600.00",
  },
  {
    id: "TRANS-69",
    date: "2025-12-04 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "6200.00",
    sender: null,
    receiver: "Schroeder LLC",
    referenceCode: "tSFuvhj7jermMJQx",
    accountNumber: "63703466",
    location: "Portugal",
    balanceAfterTransaction: "24500.00",
  },
  {
    id: "TRANS-10",
    date: "2025-12-05 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "17500.00",
    sender: null,
    receiver: "Will, Bernier and Reinger",
    referenceCode: "AcHIXkqBqfq57JyE",
    accountNumber: "46453957",
    location: "Niger",
    balanceAfterTransaction: "-41100.00",
  },
  {
    id: "TRANS-11",
    date: "2025-12-05 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "19000.00",
    sender: null,
    receiver: "Hayes - Koepp",
    referenceCode: "b3GlqDadKTLlbt1x",
    accountNumber: "17385662",
    location: "Nauru",
    balanceAfterTransaction: "-60100.00",
  },
  {
    id: "TRANS-23",
    date: "2025-12-05 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "1200.00",
    sender: "Denesik Inc",
    receiver: null,
    referenceCode: "2bbYjhPdJTc0M0CW",
    accountNumber: "46336556",
    location: "Kuwait",
    balanceAfterTransaction: "-57900.00",
  },
  {
    id: "TRANS-42",
    date: "2025-12-05 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "9800.00",
    sender: "Michael Rolfson",
    receiver: null,
    referenceCode: "Z7KKNxckBzdZuLsf",
    accountNumber: "85557550",
    location: "Kiribati",
    balanceAfterTransaction: "-33700.00",
  },
  {
    id: "TRANS-80",
    date: "2025-12-05 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "1300.00",
    sender: null,
    receiver: "Casper, Stroman and Leuschke",
    referenceCode: "IZvkHUBGVZZght0D",
    accountNumber: "98748220",
    location: "Belgium",
    balanceAfterTransaction: "58000.00",
  },
  {
    id: "TRANS-39",
    date: "2025-12-06 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "18000.00",
    sender: "Bradford Rohan",
    receiver: null,
    referenceCode: "TbNYTDsi0Aflnu0i",
    accountNumber: "06500644",
    location: "Jamaica",
    balanceAfterTransaction: "-55600.00",
  },
  {
    id: "TRANS-66",
    date: "2025-12-07 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "2800.00",
    sender: "Hills - Farrell",
    receiver: null,
    referenceCode: "X3iBUBmFkbuAEmog",
    accountNumber: "90384009",
    location: "Sierra Leone",
    balanceAfterTransaction: "12400.00",
  },
  {
    id: "TRANS-1",
    date: "2025-12-08 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "8000.00",
    sender: null,
    receiver: "Ronald Balistreri",
    referenceCode: "g4FC9FQykZYWP0fI",
    accountNumber: "32471106",
    location: "Syrian Arab Republic",
    balanceAfterTransaction: "-7500.00",
  },
  {
    id: "TRANS-67",
    date: "2025-12-08 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "10700.00",
    sender: "Rippin and Sons",
    receiver: null,
    referenceCode: "NdwIBo2J84Af8gap",
    accountNumber: "93887591",
    location: "Ethiopia",
    balanceAfterTransaction: "23100.00",
  },
  {
    id: "TRANS-3",
    date: "2025-12-09 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "18800.00",
    sender: null,
    receiver: "Mary Prohaska",
    referenceCode: "dTsAU6wMM0JBleW8",
    accountNumber: "18813771",
    location: "Madagascar",
    balanceAfterTransaction: "-10100.00",
  },
  {
    id: "TRANS-54",
    date: "2025-12-09 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "11300.00",
    sender: "Corwin - Conroy",
    receiver: null,
    referenceCode: "pwF8NY6qTbRrPOx1",
    accountNumber: "26561814",
    location: "Azerbaijan",
    balanceAfterTransaction: "45500.00",
  },
  {
    id: "TRANS-59",
    date: "2025-12-10 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "7000.00",
    sender: "Okuneva Inc",
    receiver: null,
    referenceCode: "jgxp1YujYwIUt3r4",
    accountNumber: "72202954",
    location: "Gabon",
    balanceAfterTransaction: "35100.00",
  },
  {
    id: "TRANS-44",
    date: "2025-12-11 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "14600.00",
    sender: null,
    receiver: "Jan Anderson",
    referenceCode: "MXTqNi8kNQJHdPaB",
    accountNumber: "66802819",
    location: "Brunei Darussalam",
    balanceAfterTransaction: "-37500.00",
  },
  {
    id: "TRANS-58",
    date: "2025-12-11 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "12500.00",
    sender: "Carter - Hermiston",
    receiver: null,
    referenceCode: "jdls87HV7wT5VWoK",
    accountNumber: "50721776",
    location: "Algeria",
    balanceAfterTransaction: "28100.00",
  },
  {
    id: "TRANS-75",
    date: "2025-12-11 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "2300.00",
    sender: null,
    receiver: "Oberbrunner, Abshire and Marvin",
    referenceCode: "66cXouQiTcpou28r",
    accountNumber: "85351003",
    location: "Cayman Islands",
    balanceAfterTransaction: "40800.00",
  },
  {
    id: "TRANS-32",
    date: "2025-12-12 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "1800.00",
    sender: "May O'Hara",
    receiver: null,
    referenceCode: "Q0JNQ6qewU3rzdMs",
    accountNumber: "56867692",
    location: "Guadeloupe",
    balanceAfterTransaction: "-67200.00",
  },
  {
    id: "TRANS-34",
    date: "2025-12-12 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "17800.00",
    sender: "Morissette Inc",
    receiver: null,
    referenceCode: "8dnDYPTjcxG5Gpyk",
    accountNumber: "38473403",
    location: "Peru",
    balanceAfterTransaction: "-67500.00",
  },
  {
    id: "TRANS-24",
    date: "2025-12-13 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "4700.00",
    sender: null,
    receiver: "Kautzer - Cummings",
    referenceCode: "pfHlaEgBmWIXWJZh",
    accountNumber: "82140248",
    location: "Tonga",
    balanceAfterTransaction: "-62600.00",
  },
  {
    id: "TRANS-41",
    date: "2025-12-13 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "14600.00",
    sender: "Brian Tremblay",
    receiver: null,
    referenceCode: "xoA4o3eO3I3YnB4D",
    accountNumber: "00078656",
    location: "Greenland",
    balanceAfterTransaction: "-43500.00",
  },
  {
    id: "TRANS-18",
    date: "2025-12-14 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "4300.00",
    sender: "Adrian Powlowski Jr.",
    receiver: null,
    referenceCode: "wEEEgaSeofbL3IkS",
    accountNumber: "40872454",
    location: "Samoa",
    balanceAfterTransaction: "-52100.00",
  },
  {
    id: "TRANS-38",
    date: "2025-12-14 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "16600.00",
    sender: null,
    receiver: "Cesar Hansen IV",
    referenceCode: "7kn8W6v87IMX55zG",
    accountNumber: "96878673",
    location: "Somalia",
    balanceAfterTransaction: "-73600.00",
  },
  {
    id: "TRANS-55",
    date: "2025-12-14 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "15500.00",
    sender: null,
    receiver: "Renner, Dare and Lebsack",
    referenceCode: "rWgXjzPYIXrhzBvG",
    accountNumber: "77618713",
    location: "United States of America",
    balanceAfterTransaction: "30000.00",
  },
  {
    id: "TRANS-5",
    date: "2025-12-15 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "2400.00",
    sender: "Monica Hand",
    receiver: null,
    referenceCode: "w9R8uyEC67nPI8Gm",
    accountNumber: "08012732",
    location: "Montserrat",
    balanceAfterTransaction: "-3400.00",
  },
  {
    id: "TRANS-64",
    date: "2025-12-15 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "13100.00",
    sender: null,
    receiver: "Bernier Group",
    referenceCode: "Luwn8zKpJnux6AHt",
    accountNumber: "41044912",
    location: "Micronesia",
    balanceAfterTransaction: "13400.00",
  },
  {
    id: "TRANS-77",
    date: "2025-12-15 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Debit",
    amount: "6600.00",
    sender: null,
    receiver: "Ella Fisher",
    referenceCode: "5odYIZf8ZQPslYrR",
    accountNumber: "43061035",
    location: "Iraq",
    balanceAfterTransaction: "39100.00",
  },
  {
    id: "TRANS-21",
    date: "2025-12-16 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Credit",
    amount: "12500.00",
    sender: "Daisy Harris",
    receiver: null,
    referenceCode: "JC5vukiWWhHs2utL",
    accountNumber: "61901510",
    location: "Belgium",
    balanceAfterTransaction: "-48700.00",
  },
  {
    id: "TRANS-49",
    date: "2025-12-16 00:00:00",
    transactionType: "Bank Withdrawal",
    status: "Debit",
    amount: "8800.00",
    sender: null,
    receiver: "Ervin Adams",
    referenceCode: "0cK4x22XOgpYrVAh",
    accountNumber: "48566172",
    location: "Mayotte",
    balanceAfterTransaction: "-900.00",
  },
  {
    id: "TRANS-4",
    date: "2025-12-18 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "4300.00",
    sender: "Geneva Walter",
    receiver: null,
    referenceCode: "l8x9ZwBPk6Bltg9v",
    accountNumber: "20787660",
    location: "Democratic Republic of the Congo",
    balanceAfterTransaction: "-5800.00",
  },
  {
    id: "TRANS-50",
    date: "2025-12-18 00:00:00",
    transactionType: "Bank Deposit",
    status: "Debit",
    amount: "12700.00",
    sender: null,
    receiver: "Bayer, Beatty and Walter",
    referenceCode: "4r8GpdUAVG4bt6Ij",
    accountNumber: "39254496",
    location: "Ukraine",
    balanceAfterTransaction: "-13600.00",
  },
  {
    id: "TRANS-53",
    date: "2025-12-18 00:00:00",
    transactionType: "Mobile Transfer",
    status: "Credit",
    amount: "18300.00",
    sender: "Timmy Parisian DVM",
    receiver: null,
    referenceCode: "cK7lr63Juw9a5eOn",
    accountNumber: "23629882",
    location: "Libyan Arab Jamahiriya",
    balanceAfterTransaction: "34200.00",
  },
  {
    id: "TRANS-71",
    date: "2025-12-18 00:00:00",
    transactionType: "Bank Deposit",
    status: "Credit",
    amount: "5800.00",
    sender: "Marks, Graham and Klocko",
    receiver: null,
    referenceCode: "wDVrqSghz5xFB0nH",
    accountNumber: "69810851",
    location: "Anguilla",
    balanceAfterTransaction: "46400.00",
  },
];

export interface Transaction {
  id: string;
  date: string;
  transactionType: string;
  status: string;
  amount: string;
  sender: string | null;
  receiver: string | null;
  referenceCode: string;
  accountNumber: string;
  location: string;
  balanceAfterTransaction: string;
}

async function gettransactionmessges() {
  const data = (await getTransactionsMessages()) ?? [];
  const newTransactionData = [
    ...transactionData,
    ...(data as typeof transactionData),
  ];
  return newTransactionData;
}

// gettransactionmessges();

export type TransactionByDate = {
  [date: string]: Transaction[];
};

// Transform the data into an array of objects grouped by dates, where each key is a date and the value is an array of transactions for that date
export async function getGroupedTransactions() {
  const newTransactionData = await gettransactionmessges();
  const groupedTransactions = newTransactionData
    .reverse()
    .reduce((acc: TransactionByDate, transaction) => {
      const { date } = transaction;
      const dateKey = date.split(" ")[0];

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(transaction);

      return acc;
    }, {} as TransactionByDate);

  return groupedTransactions;
}

export const groupedTransactions = transactionData.reduce(
  (acc: TransactionByDate, transaction) => {
    const { date } = transaction;
    const dateKey = date.split(" ")[0];

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(transaction);

    return acc;
  },
  {} as TransactionByDate
);

// // Custom function to get a date `numDays` ago from today, and optionally include time
// function fromToday(numDays: number, withTime = false) {
//   const date = add(new Date(), { days: numDays });
//   if (!withTime) date.setUTCHours(0, 0, 0, 0); // Reset hours if not with time
//   return date.toISOString().slice(0, -1); // Format date as ISO string
// }

// // Function to generate fresh transaction data if previous data become very old
// function generateTransactionData() {
//   let totalAmount = 20000; // Aim for around $100 million in total
//   const transactions = [];
//   const numTransactions = 80;
//   let balance = 500; // Starting balance for the account

//   const transactionTypes = [
//     "Bank Deposit",
//     "Bank Withdrawal",
//     "Mobile Transfer",
//   ];

//   // for (let i = 0; i < numTransactions; i++) {
//   //   // Generate the transaction amount (a random amount based on remaining budget)
//   //   const amount =
//   //     Math.floor(Math.random() * (totalAmount / numTransactions)) + 5000;

//   //   // Decide if it's a credit or debit
//   //   const isCredit = Math.random() > 0.5;
//   //   const transactionType =
//   //     transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

//   //   // Update balance based on the transaction type
//   //   if (isCredit) {
//   //     balance += amount;
//   //   } else {
//   //     balance -= amount;
//   //   }

//   //   // Randomly decide if the name is a company or individual
//   //   const isCompany = Math.random() > 0.5;
//   //   const name = isCompany ? faker.company.name() : faker.person.fullName();

//   //   // Generate the name, account number, and reference code
//   //   const accountNumber = faker.finance.accountNumber();
//   //   const referenceCode = faker.string.alphanumeric(16);

//   //   // Transaction date within the last 30 days
//   //   const transactionDate = format(
//   //     new Date(fromToday(-Math.floor(Math.random() * 30))), // Get random date within 30 days
//   //     "yyyy-MM-dd HH:mm:ss"
//   //   );

//   //   // Define transaction data
//   //   const transaction = {
//   //     id: `TRANS-${i + 1}`,
//   //     date: transactionDate,
//   //     transactionType,
//   //     status: isCredit ? "Credit" : "Debit",
//   //     amount: amount.toFixed(2),
//   //     sender: isCredit ? name : null,
//   //     receiver: isCredit ? null : name,
//   //     referenceCode,
//   //     accountNumber,
//   //     location: faker.location.country(),
//   //     balanceAfterTransaction: balance.toFixed(2),
//   //   };

//   //   // Add to transactions array and adjust remaining budget
//   //   transactions.push(transaction);
//   //   totalAmount -= amount;
//   // }

//   // Sort transactions by date (ascending) and return the JSON data

//   for (let i = 0; i < numTransactions; i++) {
//     // Generate a random amount within a range and round it to the nearest 100 or 500
//     // const rawAmount = Math.random() * (totalAmount / numTransactions) + 5000;
//     const rawAmount =
//       Math.round((Math.random() * (20000 - 500) + 500) / 100) * 100;

//     // Round to the nearest 100
//     const amount = Math.round(rawAmount / 100) * 100;

//     // OR round to the nearest 500 (choose one)
//     // const amount = Math.round(rawAmount / 500) * 500;

//     // Decide if it's a credit or debit
//     const isCredit = Math.random() > 0.5;
//     const transactionType =
//       transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

//     // Update balance based on the transaction type
//     if (isCredit) {
//       balance += amount;
//     } else {
//       balance -= amount;
//     }

//     // Randomly decide if the name is a company or individual
//     const isCompany = Math.random() > 0.5;
//     const name = isCompany ? faker.company.name() : faker.person.fullName();

//     // Generate the name, account number, and reference code
//     const accountNumber = faker.finance.accountNumber();
//     const referenceCode = faker.string.alphanumeric(16);

//     // Transaction date within the last 30 days
//     const transactionDate = format(
//       new Date(fromToday(-Math.floor(Math.random() * 30))),
//       "yyyy-MM-dd HH:mm:ss"
//     );

//     // Define transaction data
//     const transaction = {
//       id: `TRANS-${i + 1}`,
//       date: transactionDate,
//       transactionType,
//       status: isCredit ? "Credit" : "Debit",
//       amount: amount.toFixed(2),
//       sender: isCredit ? name : null,
//       receiver: isCredit ? null : name,
//       referenceCode,
//       accountNumber,
//       location: faker.location.country(),
//       balanceAfterTransaction: balance.toFixed(2),
//     };

//     // Add to transactions array and adjust remaining budget
//     transactions.push(transaction);
//     totalAmount -= amount;
//   }

//   transactions.sort((a, b) => +new Date(a.date) - +new Date(b.date));

//   // Return the JSON string of transactions
//   return JSON.stringify(transactions, null, 2);
// }

// // Generate the transaction data and print to console
// console.log(generateTransactionData());
