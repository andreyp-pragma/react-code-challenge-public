import { Symbol, StreamingClient } from './mock-client.models';

const SymbolData: Symbol[] = [
  {
    'symbol': 'A',
    'name': 'Agilent Technologies Inc. Common Stock',
    'last': 135,
    'change': 4.72,
    'changePct': 3.623
  },
  {
    'symbol': 'AA',
    'name': 'Alcoa Corporation Common Stock',
    'last': 75.63,
    'change': 1.92,
    'changePct': 2.605
  },
  {
    'symbol': 'AAP',
    'name': 'Advance Auto Parts Inc.',
    'last': 207.52,
    'change': 3.25,
    'changePct': 1.591
  },
  {
    'symbol': 'ABB',
    'name': 'ABB Ltd Common Stock',
    'last': 34.69,
    'change': 1.38,
    'changePct': 4.143
  },
  {
    'symbol': 'ABC',
    'name': 'AmerisourceBergen Corporation Common Stock',
    'last': 150.5,
    'change': -0.89,
    'changePct': -0.588
  },
  {
    'symbol': 'ABEV',
    'name': 'Ambev S.A. American Depositary Shares (Each representing 1 Common Share)',
    'last': 2.7,
    'change': 0.08,
    'changePct': 3.053
  },
  {
    'symbol': 'ACI',
    'name': 'Albertsons Companies Inc. Class A Common Stock',
    'last': 35.3,
    'change': -0.28,
    'changePct': -0.787
  },
  {
    'symbol': 'ACM',
    'name': 'AECOM Common Stock',
    'last': 76.91,
    'change': 1.26,
    'changePct': 1.666
  },
  {
    'symbol': 'ADM',
    'name': 'Archer-Daniels-Midland Company Common Stock',
    'last': 81.45,
    'change': -1.36,
    'changePct': -1.642
  },
  {
    'symbol': 'AEE',
    'name': 'Ameren Corporation Common Stock',
    'last': 87.93,
    'change': -0.53,
    'changePct': -0.599
  },
  {
    'symbol': 'AEM',
    'name': 'Agnico Eagle Mines Limited Common Stock',
    'last': 59.66,
    'change': -0.05,
    'changePct': -0.084
  },
  {
    'symbol': 'AER',
    'name': 'AerCap Holdings N.V. Ordinary Shares',
    'last': 54.13,
    'change': 2.13,
    'changePct': 4.096
  },
  {
    'symbol': 'AES',
    'name': 'The AES Corporation Common Stock',
    'last': 22.65,
    'change': 0.31,
    'changePct': 1.388
  },
  {
    'symbol': 'AFG',
    'name': 'American Financial Group Inc. Common Stock',
    'last': 141.09,
    'change': 1.78,
    'changePct': 1.278
  },
  {
    'symbol': 'AFL',
    'name': 'AFLAC Incorporated Common Stock',
    'last': 62.62,
    'change': 1.36,
    'changePct': 2.22
  },
  {
    'symbol': 'AGR',
    'name': 'Avangrid Inc. Common Stock',
    'last': 44.75,
    'change': 0.02,
    'changePct': 0.045
  },
  {
    'symbol': 'AIG',
    'name': 'American International Group Inc. New Common Stock',
    'last': 59.78,
    'change': 1.23,
    'changePct': 2.101
  },
  {
    'symbol': 'AJG',
    'name': 'Arthur J. Gallagher & Co. Common Stock',
    'last': 162.67,
    'change': 4.11,
    'changePct': 2.592
  },
  {
    'symbol': 'ALB',
    'name': 'Albemarle Corporation Common Stock',
    'last': 191.25,
    'change': 9.3,
    'changePct': 5.111
  },
  {
    'symbol': 'ALC',
    'name': 'Alcon Inc. Ordinary Shares',
    'last': 74.88,
    'change': 2.28,
    'changePct': 3.14
  },
  {
    'symbol': 'ALL',
    'name': 'Allstate Corporation (The) Common Stock',
    'last': 126.49,
    'change': -0.64,
    'changePct': -0.503
  },
  {
    'symbol': 'ALLE',
    'name': 'Allegion plc Ordinary Shares',
    'last': 116.44,
    'change': 1.97,
    'changePct': 1.721
  },
  {
    'symbol': 'ALLY',
    'name': 'Ally Financial Inc. Common Stock',
    'last': 43.37,
    'change': 1.93,
    'changePct': 4.657
  },
  {
    'symbol': 'AMCR',
    'name': 'Amcor plc Ordinary Shares',
    'last': 11.46,
    'change': 0.22,
    'changePct': 1.957
  },
  {
    'symbol': 'AME',
    'name': 'AMETEK Inc.',
    'last': 131.38,
    'change': 2,
    'changePct': 1.546
  },
  {
    'symbol': 'AMH',
    'name': 'American Homes 4 Rent Common Shares of Beneficial Interest',
    'last': 38.62,
    'change': 0.24,
    'changePct': 0.625
  },
  {
    'symbol': 'AMOV',
    'name': 'America Movil S.A.B. de C.V. Class A American Depositary Shares',
    'last': 19.24,
    'change': 0.34,
    'changePct': 1.799
  },
  {
    'symbol': 'AMP',
    'name': 'Ameriprise Financial Inc. Common Stock',
    'last': 294.47,
    'change': 14.88,
    'changePct': 5.322
  },
  {
    'symbol': 'AMT',
    'name': 'American Tower Corporation (REIT) Common Stock',
    'last': 239.63,
    'change': 3.42,
    'changePct': 1.448
  },
  {
    'symbol': 'AMX',
    'name': 'America Movil S.A.B. de C.V. American Depository Receipt Series L',
    'last': 19.43,
    'change': 0.41,
    'changePct': 2.156
  },
  {
    'symbol': 'ANET',
    'name': 'Arista Networks Inc. Common Stock',
    'last': 124.19,
    'change': 3.03,
    'changePct': 2.501
  },
  {
    'symbol': 'ANTM',
    'name': 'Anthem Inc. Common Stock',
    'last': 470.82,
    'change': 3.13,
    'changePct': 0.669
  },
  {
    'symbol': 'AON',
    'name': 'Aon plc Class A Ordinary Shares (Ireland)',
    'last': 309.52,
    'change': 1.9,
    'changePct': 0.618
  },
  {
    'symbol': 'AOS',
    'name': 'A.O. Smith Corporation Common Stock',
    'last': 67.31,
    'change': 1.17,
    'changePct': 1.769
  },
  {
    'symbol': 'APD',
    'name': 'Air Products and Chemicals Inc. Common Stock',
    'last': 224.6,
    'change': 1.97,
    'changePct': 0.885
  },
  {
    'symbol': 'APH',
    'name': 'Amphenol Corporation Common Stock',
    'last': 75.23,
    'change': 1.8,
    'changePct': 2.451
  },
  {
    'symbol': 'APO',
    'name': 'Apollo Global Management Inc. (New) Common Stock',
    'last': 62.28,
    'change': 2.73,
    'changePct': 4.584
  },
  {
    'symbol': 'APTV',
    'name': 'Aptiv PLC Ordinary Shares',
    'last': 116.71,
    'change': 8.64,
    'changePct': 7.995
  },
  {
    'symbol': 'ARE',
    'name': 'Alexandria Real Estate Equities Inc. Common Stock',
    'last': 191.62,
    'change': 0.86,
    'changePct': 0.451
  },
  {
    'symbol': 'ARES',
    'name': 'Ares Management Corporation Class A Common Stock',
    'last': 75.46,
    'change': 4.2,
    'changePct': 5.894
  },
  {
    'symbol': 'ASX',
    'name': 'ASE Technology Holding Co. Ltd. American Depositary Shares (each representing Two Common Shares)',
    'last': 7.35,
    'change': 0.32,
    'changePct': 4.552
  },
  {
    'symbol': 'ATO',
    'name': 'Atmos Energy Corporation Common Stock',
    'last': 114.35,
    'change': 0.24,
    'changePct': 0.21
  },
  {
    'symbol': 'AVB',
    'name': 'AvalonBay Communities Inc. Common Stock',
    'last': 243.01,
    'change': 2.79,
    'changePct': 1.161
  },
  {
    'symbol': 'AVTR',
    'name': 'Avantor Inc. Common Stock',
    'last': 34.9,
    'change': 0.4,
    'changePct': 1.159
  },
  {
    'symbol': 'AVY',
    'name': 'Avery Dennison Corporation Common Stock',
    'last': 170.1,
    'change': 2.97,
    'changePct': 1.777
  },
  {
    'symbol': 'AWK',
    'name': 'American Water Works Company Inc. Common Stock',
    'last': 156.15,
    'change': 0.2,
    'changePct': 0.128
  },
  {
    'symbol': 'AXP',
    'name': 'American Express Company Common Stock',
    'last': 180.61,
    'change': 4.57,
    'changePct': 2.596
  },
  {
    'symbol': 'AZO',
    'name': 'AutoZone Inc. Common Stock',
    'last': 1970.74,
    'change': 46.8,
    'changePct': 2.433
  },
  {
    'symbol': 'BA',
    'name': 'Boeing Company (The) Common Stock',
    'last': 188.99,
    'change': 9.1,
    'changePct': 5.059
  },
  {
    'symbol': 'BAH',
    'name': 'Booz Allen Hamilton Holding Corporation Common Stock',
    'last': 83.84,
    'change': -1.11,
    'changePct': -1.307
  },
  {
    'symbol': 'BAM',
    'name': 'Brookfield Asset Management Inc. Common Stock',
    'last': 54.57,
    'change': 1.78,
    'changePct': 3.372
  },
  {
    'symbol': 'BAP',
    'name': 'Credicorp Ltd. Common Stock',
    'last': 167.82,
    'change': 3.12,
    'changePct': 1.894
  },
  {
    'symbol': 'BAX',
    'name': 'Baxter International Inc. Common Stock',
    'last': 78.96,
    'change': 0.29,
    'changePct': 0.369
  },
  {
    'symbol': 'BBD',
    'name': 'Banco Bradesco Sa American Depositary Shares',
    'last': 4.1,
    'change': 0.13,
    'changePct': 3.275
  },
  {
    'symbol': 'BBDO',
    'name': 'Banco Bradesco Sa American Depositary Shares (each representing one Common Share)',
    'last': 3.22,
    'change': -0.11,
    'changePct': -3.303
  },
  {
    'symbol': 'BBVA',
    'name': 'Banco Bilbao Vizcaya Argentaria S.A. Common Stock',
    'last': 5.91,
    'change': 0.26,
    'changePct': 4.602
  },
  {
    'symbol': 'BBWI',
    'name': 'Bath & Body Works Inc.',
    'last': 48.75,
    'change': 1.63,
    'changePct': 3.459
  },
  {
    'symbol': 'BBY',
    'name': 'Best Buy Co. Inc. Common Stock',
    'last': 98.84,
    'change': -0.22,
    'changePct': -0.222
  },
  {
    'symbol': 'BCE',
    'name': 'BCE Inc. Common Stock',
    'last': 53.63,
    'change': 0.58,
    'changePct': 1.093
  },
  {
    'symbol': 'BCH',
    'name': 'Banco De Chile Banco De Chile ADS',
    'last': 21.56,
    'change': 0.71,
    'changePct': 3.405
  },
  {
    'symbol': 'BCS',
    'name': 'Barclays PLC Common Stock',
    'last': 9.32,
    'change': 0.38,
    'changePct': 4.251
  },
  {
    'symbol': 'BDX',
    'name': 'Becton Dickinson and Company Common Stock',
    'last': 260.79,
    'change': 2.1,
    'changePct': 0.812
  },
  {
    'symbol': 'BEKE',
    'name': 'KE Holdings Inc American Depositary Shares (each representing three Class A Ordinary Shares)',
    'last': 14.89,
    'change': 5.83,
    'changePct': 64.349
  },
  {
    'symbol': 'BEN',
    'name': 'Franklin Resources Inc. Common Stock',
    'last': 27.87,
    'change': 0.9,
    'changePct': 3.337
  },
  {
    'symbol': 'BEP',
    'name': 'Brookfield Renewable Partners L.P.',
    'last': 40.22,
    'change': 0.02,
    'changePct': 0.05
  },
  {
    'symbol': 'BG',
    'name': 'Bunge Limited Bunge Limited',
    'last': 104.06,
    'change': -4,
    'changePct': -3.702
  },
  {
    'symbol': 'BHP',
    'name': 'BHP Group Limited American Depositary Shares (Each representing two Ordinary Shares)',
    'last': 66.84,
    'change': 2.06,
    'changePct': 3.18
  },
  {
    'symbol': 'BILL',
    'name': 'Bill.com Holdings Inc. Common Stock',
    'last': 198.28,
    'change': 22.86,
    'changePct': 13.032
  },
  {
    'symbol': 'BIO',
    'name': 'Bio-Rad Laboratories Inc. Class A Common Stock',
    'last': 562.81,
    'change': 14.07,
    'changePct': 2.564
  },
  {
    'symbol': 'BIP',
    'name': 'Brookfield Infrastructure Partners LP Limited Partnership Units',
    'last': 60.67,
    'change': 0.66,
    'changePct': 1.1
  },
  {
    'symbol': 'BK',
    'name': 'The Bank of New York Mellon Corporation Common Stock',
    'last': 51.91,
    'change': 1.36,
    'changePct': 2.69
  },
  {
    'symbol': 'BLDR',
    'name': 'Builders FirstSource Inc. Common Stock',
    'last': 75.27,
    'change': 1.91,
    'changePct': 2.604
  },
  {
    'symbol': 'BLK',
    'name': 'BlackRock Inc. Common Stock',
    'last': 731.11,
    'change': 23.44,
    'changePct': 3.312
  },
  {
    'symbol': 'BLL',
    'name': 'Ball Corporation Common Stock',
    'last': 90.4,
    'change': -0.35,
    'changePct': -0.386
  },
  {
    'symbol': 'BMO',
    'name': 'Bank Of Montreal Common Stock',
    'last': 119.38,
    'change': 3.05,
    'changePct': 2.622
  },
  {
    'symbol': 'BMY',
    'name': 'Bristol-Myers Squibb Company Common Stock',
    'last': 69.66,
    'change': -0.09,
    'changePct': -0.129
  },
  {
    'symbol': 'BNS',
    'name': 'Bank Nova Scotia Halifax Pfd 3 Ordinary Shares',
    'last': 73.14,
    'change': 1.22,
    'changePct': 1.696
  },
  {
    'symbol': 'BP',
    'name': 'BP p.l.c. Common Stock',
    'last': 28.61,
    'change': 0.56,
    'changePct': 1.996
  },
  {
    'symbol': 'BR',
    'name': 'Broadridge Financial Solutions Inc. Common Stock',
    'last': 150.88,
    'change': 4.6,
    'changePct': 3.145
  },
  {
    'symbol': 'BRO',
    'name': 'Brown & Brown Inc. Common Stock',
    'last': 66.88,
    'change': 0.9,
    'changePct': 1.364
  },
  {
    'symbol': 'BSAC',
    'name': 'Banco Santander - Chile ADS',
    'last': 21.71,
    'change': 0.94,
    'changePct': 4.526
  },
  {
    'symbol': 'BSBR',
    'name': 'Banco Santander Brasil SA American Depositary Shares each representing one unit',
    'last': 6.65,
    'change': 0.23,
    'changePct': 3.583
  },
  {
    'symbol': 'BSX',
    'name': 'Boston Scientific Corporation Common Stock',
    'last': 43.84,
    'change': 1.18,
    'changePct': 2.766
  },
  {
    'symbol': 'BTI',
    'name': 'British American Tobacco  Industries p.l.c. Common Stock ADR',
    'last': 40.69,
    'change': 0.28,
    'changePct': 0.693
  },
  {
    'symbol': 'BUD',
    'name': 'Anheuser-Busch Inbev SA Sponsored ADR (Belgium)',
    'last': 59.67,
    'change': 2.28,
    'changePct': 3.973
  },
  {
    'symbol': 'BURL',
    'name': 'Burlington Stores Inc. Common Stock',
    'last': 199.63,
    'change': 3.29,
    'changePct': 1.676
  },
  {
    'symbol': 'BX',
    'name': 'Blackstone Inc. Common Stock',
    'last': 116.05,
    'change': 6.33,
    'changePct': 5.769
  },
  {
    'symbol': 'BXP',
    'name': 'Boston Properties Inc. Common Stock',
    'last': 123.78,
    'change': 1.12,
    'changePct': 0.913
  },
  {
    'symbol': 'C',
    'name': 'Citigroup Inc. Common Stock',
    'last': 56.8,
    'change': 1.69,
    'changePct': 3.067
  },
  {
    'symbol': 'CAG',
    'name': 'ConAgra Brands Inc. Common Stock',
    'last': 31.7,
    'change': -0.13,
    'changePct': -0.408
  },
  {
    'symbol': 'CAH',
    'name': 'Cardinal Health Inc. Common Stock',
    'last': 53.77,
    'change': -0.16,
    'changePct': -0.297
  },
  {
    'symbol': 'CAJ',
    'name': 'Canon Inc. American Depositary Shares',
    'last': 24.27,
    'change': 0.51,
    'changePct': 2.146
  },
  {
    'symbol': 'CARR',
    'name': 'Carrier Global Corporation Common Stock',
    'last': 46.88,
    'change': 1.68,
    'changePct': 3.717
  },
  {
    'symbol': 'CAT',
    'name': 'Caterpillar Inc. Common Stock',
    'last': 216.08,
    'change': -0.38,
    'changePct': -0.176
  },
  {
    'symbol': 'CB',
    'name': 'Chubb Limited  Common Stock',
    'last': 210.97,
    'change': 3.52,
    'changePct': 1.697
  },
  {
    'symbol': 'CBRE',
    'name': 'CBRE Group Inc Common Stock Class A',
    'last': 90.97,
    'change': 3.4,
    'changePct': 3.883
  },
  {
    'symbol': 'CCI',
    'name': 'Crown Castle International Corp. (REIT) Common Stock',
    'last': 173.4,
    'change': 0.64,
    'changePct': 0.37
  },
  {
    'symbol': 'CCK',
    'name': 'Crown Holdings Inc.',
    'last': 126.04,
    'change': -1.04,
    'changePct': -0.818
  },
  {
    'symbol': 'CCL',
    'name': 'Carnival Corporation Common Stock',
    'last': 19.33,
    'change': 1.29,
    'changePct': 7.151
  },
  {
    'symbol': 'CE',
    'name': 'Celanese Corporation Celanese Corporation Common Stock',
    'last': 142.24,
    'change': 3.7,
    'changePct': 2.671
  },
  {
    'symbol': 'CF',
    'name': 'CF Industries Holdings Inc. Common Stock',
    'last': 88.16,
    'change': -6.7,
    'changePct': -7.063
  },
  {
    'symbol': 'CFG',
    'name': 'Citizens Financial Group Inc. Common Stock',
    'last': 50.34,
    'change': 1.65,
    'changePct': 3.389
  },
  {
    'symbol': 'CHD',
    'name': 'Church & Dwight Company Inc. Common Stock',
    'last': 97.09,
    'change': -1.86,
    'changePct': -1.88
  },
  {
    'symbol': 'CHT',
    'name': 'Chunghwa Telecom Co. Ltd.',
    'last': 44.49,
    'change': 0.87,
    'changePct': 1.994
  },
  {
    'symbol': 'CHWY',
    'name': 'Chewy Inc. Class A Common Stock',
    'last': 41.19,
    'change': 3.97,
    'changePct': 10.666
  },
  {
    'symbol': 'CI',
    'name': 'Cigna Corporation Common Stock',
    'last': 237.5,
    'change': 4.42,
    'changePct': 1.896
  },
  {
    'symbol': 'CL',
    'name': 'Colgate-Palmolive Company Common Stock',
    'last': 75.15,
    'change': -0.34,
    'changePct': -0.45
  },
  {
    'symbol': 'CLF',
    'name': 'Cleveland-Cliffs Inc. Common Stock',
    'last': 26.18,
    'change': 0.84,
    'changePct': 3.315
  },
  {
    'symbol': 'CLR',
    'name': 'Continental Resources Inc. Common Stock',
    'last': 57,
    'change': 0.26,
    'changePct': 0.458
  },
  {
    'symbol': 'CLVT',
    'name': 'Clarivate Plc Ordinary Shares',
    'last': 15.23,
    'change': 0.81,
    'changePct': 5.617
  },
  {
    'symbol': 'CLX',
    'name': 'Clorox Company (The) Common Stock',
    'last': 131.56,
    'change': 0.93,
    'changePct': 0.712
  },
  {
    'symbol': 'CM',
    'name': 'Canadian Imperial Bank of Commerce Common Stock',
    'last': 127.28,
    'change': 2.62,
    'changePct': 2.102
  },
  {
    'symbol': 'CMA',
    'name': 'Comerica Incorporated Common Stock',
    'last': 95.91,
    'change': 4.11,
    'changePct': 4.477
  },
  {
    'symbol': 'CMG',
    'name': 'Chipotle Mexican Grill Inc. Common Stock',
    'last': 1554.74,
    'change': 61.09,
    'changePct': 4.09
  },
  {
    'symbol': 'CMI',
    'name': 'Cummins Inc. Common Stock',
    'last': 205.26,
    'change': 6.79,
    'changePct': 3.421
  },
  {
    'symbol': 'CMS',
    'name': 'CMS Energy Corporation Common Stock',
    'last': 66.47,
    'change': -0.78,
    'changePct': -1.16
  },
  {
    'symbol': 'CNA',
    'name': 'CNA Financial Corporation Common Stock',
    'last': 47.38,
    'change': 0.7,
    'changePct': 1.5
  },
  {
    'symbol': 'CNC',
    'name': 'Centene Corporation Common Stock',
    'last': 86.87,
    'change': 1.26,
    'changePct': 1.472
  },
  {
    'symbol': 'CNHI',
    'name': 'CNH Industrial N.V. Common Shares',
    'last': 15.44,
    'change': 0.16,
    'changePct': 1.047
  },
  {
    'symbol': 'CNI',
    'name': 'Canadian National Railway Company Common Stock',
    'last': 127.34,
    'change': 3.76,
    'changePct': 3.043
  },
  {
    'symbol': 'CNP',
    'name': 'CenterPoint Energy Inc (Holding Co) Common Stock',
    'last': 28.87,
    'change': -0.01,
    'changePct': -0.035
  },
  {
    'symbol': 'CNQ',
    'name': 'Canadian Natural Resources Limited Common Stock',
    'last': 58.84,
    'change': 1.03,
    'changePct': 1.782
  },
  {
    'symbol': 'COF',
    'name': 'Capital One Financial Corporation Common Stock',
    'last': 137.84,
    'change': 3.57,
    'changePct': 2.659
  },
  {
    'symbol': 'COO',
    'name': 'The Cooper Companies Inc. Common Stock',
    'last': 407.12,
    'change': 16.65,
    'changePct': 4.264
  },
  {
    'symbol': 'COP',
    'name': 'ConocoPhillips Common Stock',
    'last': 94.82,
    'change': -0.23,
    'changePct': -0.242
  },
  {
    'symbol': 'CP',
    'name': 'Canadian Pacific Railway Limited Common Stock',
    'last': 79.43,
    'change': 2.48,
    'changePct': 3.223
  },
  {
    'symbol': 'CPB',
    'name': 'Campbell Soup Company Common Stock',
    'last': 42.66,
    'change': -0.81,
    'changePct': -1.863
  },
  {
    'symbol': 'CPNG',
    'name': 'Coupang Inc. Class A Common Stock',
    'last': 18.09,
    'change': 2.64,
    'changePct': 17.087
  },
  {
    'symbol': 'CPT',
    'name': 'Camden Property Trust Common Stock',
    'last': 166.66,
    'change': 0.91,
    'changePct': 0.549
  },
  {
    'symbol': 'CRH',
    'name': 'CRH PLC American Depositary Shares',
    'last': 43.94,
    'change': 0.26,
    'changePct': 0.595
  },
  {
    'symbol': 'CRL',
    'name': 'Charles River Laboratories International Inc. Common Stock',
    'last': 270.77,
    'change': 11.54,
    'changePct': 4.452
  },
  {
    'symbol': 'CS',
    'name': 'Credit Suisse Group American Depositary Shares',
    'last': 7.98,
    'change': 0.39,
    'changePct': 5.138
  },
  {
    'symbol': 'CSL',
    'name': 'Carlisle Companies Incorporated Common Stock',
    'last': 246.48,
    'change': 7.9,
    'changePct': 3.311
  },
  {
    'symbol': 'CTLT',
    'name': 'Catalent Inc. Common Stock',
    'last': 102.82,
    'change': 6.25,
    'changePct': 6.472
  },
  {
    'symbol': 'CTRA',
    'name': 'Coterra Energy Inc. Common Stock',
    'last': 23.47,
    'change': 0.04,
    'changePct': 0.171
  },
  {
    'symbol': 'CTVA',
    'name': 'Corteva Inc. Common Stock',
    'last': 54.76,
    'change': -0.23,
    'changePct': -0.418
  },
  {
    'symbol': 'CUBE',
    'name': 'CubeSmart Common Shares',
    'last': 49.66,
    'change': 0.52,
    'changePct': 1.058
  },
  {
    'symbol': 'CUK',
    'name': 'Carnival Plc ADS ADS',
    'last': 18.07,
    'change': 1.28,
    'changePct': 7.624
  },
  {
    'symbol': 'CVE',
    'name': 'Cenovus Energy Inc Common Stock',
    'last': 14.9,
    'change': -0.05,
    'changePct': -0.334
  },
  {
    'symbol': 'CVNA',
    'name': 'Carvana Co. Class A Common Stock',
    'last': 129.45,
    'change': 9.01,
    'changePct': 7.481
  },
  {
    'symbol': 'CVS',
    'name': 'CVS Health Corporation Common Stock',
    'last': 107.11,
    'change': 0.13,
    'changePct': 0.122
  },
  {
    'symbol': 'D',
    'name': 'Dominion Energy Inc. Common Stock',
    'last': 80.76,
    'change': -0.26,
    'changePct': -0.321
  },
  {
    'symbol': 'DAL',
    'name': 'Delta Air Lines Inc. Common Stock',
    'last': 36.93,
    'change': 2.07,
    'changePct': 5.938
  },
  {
    'symbol': 'DAR',
    'name': 'Darling Ingredients Inc. Common Stock',
    'last': 73.9,
    'change': 3.15,
    'changePct': 4.452
  },
  {
    'symbol': 'DASH',
    'name': 'DoorDash Inc. Class A Common Stock',
    'last': 90.5,
    'change': 10.73,
    'changePct': 13.451
  },
  {
    'symbol': 'DB',
    'name': 'Deutsche Bank AG Common Stock',
    'last': 12.21,
    'change': 0.84,
    'changePct': 7.388
  },
  {
    'symbol': 'DD',
    'name': 'DuPont de Nemours Inc. Common Stock',
    'last': 74.24,
    'change': 2.37,
    'changePct': 3.298
  },
  {
    'symbol': 'DE',
    'name': 'Deere & Company Common Stock',
    'last': 388.2,
    'change': -0.27,
    'changePct': -0.07
  },
  {
    'symbol': 'DELL',
    'name': 'Dell Technologies Inc. Class C Common Stock',
    'last': 51.97,
    'change': -0.11,
    'changePct': -0.211
  },
  {
    'symbol': 'DEO',
    'name': 'Diageo plc Common Stock',
    'last': 190.85,
    'change': 7.93,
    'changePct': 4.335
  },
  {
    'symbol': 'DFS',
    'name': 'Discover Financial Services Common Stock',
    'last': 114.15,
    'change': 3.86,
    'changePct': 3.5
  },
  {
    'symbol': 'DG',
    'name': 'Dollar General Corporation Common Stock',
    'last': 212.49,
    'change': -1.76,
    'changePct': -0.821
  },
  {
    'symbol': 'DGX',
    'name': 'Quest Diagnostics Incorporated Common Stock',
    'last': 143.29,
    'change': 1.64,
    'changePct': 1.158
  },
  {
    'symbol': 'DHI',
    'name': 'D.R. Horton Inc. Common Stock',
    'last': 81.74,
    'change': 1.33,
    'changePct': 1.654
  },
  {
    'symbol': 'DHR',
    'name': 'Danaher Corporation Common Stock',
    'last': 277.92,
    'change': 7.03,
    'changePct': 2.595
  },
  {
    'symbol': 'DIDI',
    'name': 'DiDi Global Inc. American Depositary Shares (each four representing one Class A Ordinary Share)',
    'last': 2.55,
    'change': 0.75,
    'changePct': 41.667
  },
  {
    'symbol': 'DLR',
    'name': 'Digital Realty Trust Inc. Common Stock',
    'last': 136.07,
    'change': 0.92,
    'changePct': 0.681
  },
  {
    'symbol': 'DOV',
    'name': 'Dover Corporation Common Stock',
    'last': 155.8,
    'change': 3.61,
    'changePct': 2.372
  },
  {
    'symbol': 'DOW',
    'name': 'Dow Inc. Common Stock',
    'last': 59.64,
    'change': 0.77,
    'changePct': 1.308
  },
  {
    'symbol': 'DPZ',
    'name': 'Domino\'s Pizza Inc Common Stock',
    'last': 405.47,
    'change': 15.56,
    'changePct': 3.991
  },
  {
    'symbol': 'DRE',
    'name': 'Duke Realty Corporation Common Stock',
    'last': 54.87,
    'change': 0.77,
    'changePct': 1.423
  },
  {
    'symbol': 'DRI',
    'name': 'Darden Restaurants Inc. Common Stock',
    'last': 129.68,
    'change': 5.3,
    'changePct': 4.261
  },
  {
    'symbol': 'DT',
    'name': 'Dynatrace Inc. Common Stock',
    'last': 42.56,
    'change': 2.96,
    'changePct': 7.475
  },
  {
    'symbol': 'DTE',
    'name': 'DTE Energy Company Common Stock',
    'last': 127.79,
    'change': 0.03,
    'changePct': 0.023
  },
  {
    'symbol': 'DUK',
    'name': 'Duke Energy Corporation (Holding Company) Common Stock',
    'last': 105.97,
    'change': -0.72,
    'changePct': -0.675
  },
  {
    'symbol': 'DVA',
    'name': 'DaVita Inc. Common Stock',
    'last': 112.34,
    'change': 1.71,
    'changePct': 1.546
  },
  {
    'symbol': 'DVN',
    'name': 'Devon Energy Corporation Common Stock',
    'last': 52.46,
    'change': -0.55,
    'changePct': -1.038
  },
  {
    'symbol': 'E',
    'name': 'ENI S.p.A. Common Stock',
    'last': 28.15,
    'change': -0.05,
    'changePct': -0.177
  },
  {
    'symbol': 'EBR',
    'name': 'Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one Common Share)',
    'last': 6.54,
    'change': 0.03,
    'changePct': 0.461
  },
  {
    'symbol': 'EC',
    'name': 'Ecopetrol S.A. American Depositary Shares',
    'last': 16.66,
    'change': -0.01,
    'changePct': -0.06
  },
  {
    'symbol': 'ECL',
    'name': 'Ecolab Inc. Common Stock',
    'last': 170.76,
    'change': 2.94,
    'changePct': 1.752
  },
  {
    'symbol': 'ED',
    'name': 'Consolidated Edison Inc. Common Stock',
    'last': 89.64,
    'change': -0.76,
    'changePct': -0.841
  },
  {
    'symbol': 'EFX',
    'name': 'Equifax Inc. Common Stock',
    'last': 233.83,
    'change': 3.04,
    'changePct': 1.317
  },
  {
    'symbol': 'EIX',
    'name': 'Edison International Common Stock',
    'last': 66.31,
    'change': 0.18,
    'changePct': 0.272
  },
  {
    'symbol': 'EL',
    'name': 'Estee Lauder Companies Inc. (The) Common Stock',
    'last': 270.88,
    'change': 11.98,
    'changePct': 4.627
  },
  {
    'symbol': 'ELAN',
    'name': 'Elanco Animal Health Incorporated Common Stock',
    'last': 26.41,
    'change': 0.94,
    'changePct': 3.691
  },
  {
    'symbol': 'ELP',
    'name': 'Companhia Paranaense de Energia (COPEL) American Depositary Shares (each representing one Unit consisting one Common Share and four non-voting Class B Preferred Shares)',
    'last': 6.8,
    'change': 0.07,
    'changePct': 1.04
  },
  {
    'symbol': 'ELS',
    'name': 'Equity Lifestyle Properties Inc. Common Stock',
    'last': 74.83,
    'change': 1.13,
    'changePct': 1.533
  },
  {
    'symbol': 'EMN',
    'name': 'Eastman Chemical Company Common Stock',
    'last': 107.1,
    'change': 1.1,
    'changePct': 1.038
  },
  {
    'symbol': 'EMR',
    'name': 'Emerson Electric Company Common Stock',
    'last': 93.76,
    'change': 1.11,
    'changePct': 1.198
  },
  {
    'symbol': 'ENB',
    'name': 'Enbridge Inc Common Stock',
    'last': 44.02,
    'change': -0.04,
    'changePct': -0.091
  },
  {
    'symbol': 'ENIA',
    'name': 'Enel Americas S.A. American Depositary Shares',
    'last': 5.71,
    'change': 0.15,
    'changePct': 2.698
  },
  {
    'symbol': 'EOG',
    'name': 'EOG Resources Inc. Common Stock',
    'last': 113,
    'change': -0.82,
    'changePct': -0.72
  },
  {
    'symbol': 'EPAM',
    'name': 'EPAM Systems Inc. Common Stock',
    'last': 281.72,
    'change': 56.68,
    'changePct': 25.187
  },
  {
    'symbol': 'EPD',
    'name': 'Enterprise Products Partners L.P. Common Stock',
    'last': 24.12,
    'change': -0.06,
    'changePct': -0.248
  },
  {
    'symbol': 'EQH',
    'name': 'Equitable Holdings Inc. Common Stock',
    'last': 31.54,
    'change': 1.05,
    'changePct': 3.444
  },
  {
    'symbol': 'EQNR',
    'name': 'Equinor ASA',
    'last': 32.27,
    'change': 0.08,
    'changePct': 0.249
  },
  {
    'symbol': 'EQR',
    'name': 'Equity Residential Common Shares of Beneficial Interest',
    'last': 88.22,
    'change': 0.83,
    'changePct': 0.95
  },
  {
    'symbol': 'ES',
    'name': 'Eversource Energy (D/B/A) Common Stock',
    'last': 84.03,
    'change': -0.14,
    'changePct': -0.166
  },
  {
    'symbol': 'ESS',
    'name': 'Essex Property Trust Inc. Common Stock',
    'last': 342.41,
    'change': 7.14,
    'changePct': 2.13
  },
  {
    'symbol': 'ET',
    'name': 'Energy Transfer LP Common Units',
    'last': 9.84,
    'change': 0.09,
    'changePct': 0.923
  },
  {
    'symbol': 'ETN',
    'name': 'Eaton Corporation PLC Ordinary Shares',
    'last': 153.34,
    'change': 3.07,
    'changePct': 2.043
  },
  {
    'symbol': 'ETR',
    'name': 'Entergy Corporation Common Stock',
    'last': 110.52,
    'change': -0.73,
    'changePct': -0.656
  },
  {
    'symbol': 'EVRG',
    'name': 'Evergy Inc. Common Stock',
    'last': 64.68,
    'change': -0.19,
    'changePct': -0.293
  },
  {
    'symbol': 'EW',
    'name': 'Edwards Lifesciences Corporation Common Stock',
    'last': 109.79,
    'change': 3.64,
    'changePct': 3.429
  },
  {
    'symbol': 'EXR',
    'name': 'Extra Space Storage Inc Common Stock',
    'last': 193.41,
    'change': 3.72,
    'changePct': 1.961
  },
  {
    'symbol': 'F',
    'name': 'Ford Motor Company Common Stock',
    'last': 16.58,
    'change': 0.52,
    'changePct': 3.238
  },
  {
    'symbol': 'FBHS',
    'name': 'Fortune Brands Home & Security Inc. Common Stock',
    'last': 85.52,
    'change': 1.2,
    'changePct': 1.423
  },
  {
    'symbol': 'FCX',
    'name': 'Freeport-McMoRan Inc. Common Stock',
    'last': 46.42,
    'change': 2.14,
    'changePct': 4.833
  },
  {
    'symbol': 'FDX',
    'name': 'FedEx Corporation Common Stock',
    'last': 225.93,
    'change': 9.7,
    'changePct': 4.486
  },
  {
    'symbol': 'FE',
    'name': 'FirstEnergy Corp. Common Stock',
    'last': 43.88,
    'change': -0.31,
    'changePct': -0.702
  },
  {
    'symbol': 'FERG',
    'name': 'Ferguson plc Ordinary Shares',
    'last': 144.39,
    'change': -1.27,
    'changePct': -0.872
  },
  {
    'symbol': 'FHN',
    'name': 'First Horizon Corporation Common Stock',
    'last': 23.05,
    'change': -0.11,
    'changePct': -0.475
  },
  {
    'symbol': 'FICO',
    'name': 'Fair Isaac Corproation Common Stock',
    'last': 483.72,
    'change': 5.04,
    'changePct': 1.053
  },
  {
    'symbol': 'FIS',
    'name': 'Fidelity National Information Services Inc. Common Stock',
    'last': 95.38,
    'change': 2.78,
    'changePct': 3.002
  },
  {
    'symbol': 'FLT',
    'name': 'FleetCor Technologies Inc. Common Stock',
    'last': 236.53,
    'change': 7.12,
    'changePct': 3.104
  },
  {
    'symbol': 'FMC',
    'name': 'FMC Corporation Common Stock',
    'last': 126.13,
    'change': -1.55,
    'changePct': -1.214
  },
  {
    'symbol': 'FMS',
    'name': 'Fresenius Medical Care AG Common Stock',
    'last': 33.63,
    'change': 1.28,
    'changePct': 3.957
  },
  {
    'symbol': 'FMX',
    'name': 'Fomento Economico Mexicano S.A.B. de C.V. Common Stock',
    'last': 79.61,
    'change': 0.41,
    'changePct': 0.518
  },
  {
    'symbol': 'FND',
    'name': 'Floor & Decor Holdings Inc. Common Stock',
    'last': 99.18,
    'change': 3.19,
    'changePct': 3.323
  },
  {
    'symbol': 'FNF',
    'name': 'FNF Group of Fidelity National Financial Inc. Common Stock',
    'last': 49.38,
    'change': 0.98,
    'changePct': 2.025
  },
  {
    'symbol': 'FNV',
    'name': 'Franco-Nevada Corporation',
    'last': 154.26,
    'change': -0.34,
    'changePct': -0.22
  },
  {
    'symbol': 'FRC',
    'name': 'FIRST REPUBLIC BANK Common Stock',
    'last': 169.38,
    'change': 8.39,
    'changePct': 5.212
  },
  {
    'symbol': 'FTS',
    'name': 'Fortis Inc. Common Shares',
    'last': 47.65,
    'change': 0.49,
    'changePct': 1.039
  },
  {
    'symbol': 'FTV',
    'name': 'Fortive Corporation Common Stock',
    'last': 59.58,
    'change': 2.59,
    'changePct': 4.545
  },
  {
    'symbol': 'GD',
    'name': 'General Dynamics Corporation Common Stock',
    'last': 227.69,
    'change': -9.93,
    'changePct': -4.179
  },
  {
    'symbol': 'GDDY',
    'name': 'GoDaddy Inc. Class A Common Stock',
    'last': 77.29,
    'change': 0.73,
    'changePct': 0.954
  },
  {
    'symbol': 'GE',
    'name': 'General Electric Company Common Stock',
    'last': 94.7,
    'change': 2.35,
    'changePct': 2.545
  },
  {
    'symbol': 'GFI',
    'name': 'Gold Fields Limited American Depositary Shares',
    'last': 15.73,
    'change': -0.22,
    'changePct': -1.379
  },
  {
    'symbol': 'GFL',
    'name': 'GFL Environmental Inc. Subordinate voting shares no par value',
    'last': 29.66,
    'change': 1.22,
    'changePct': 4.29
  },
  {
    'symbol': 'GGG',
    'name': 'Graco Inc. Common Stock',
    'last': 70.21,
    'change': 1.24,
    'changePct': 1.798
  },
  {
    'symbol': 'GIB',
    'name': 'CGI Inc. Common Stock',
    'last': 81.53,
    'change': 1.94,
    'changePct': 2.437
  },
  {
    'symbol': 'GIS',
    'name': 'General Mills Inc. Common Stock',
    'last': 62.65,
    'change': -0.63,
    'changePct': -0.996
  },
  {
    'symbol': 'GLOB',
    'name': 'Globant S.A. Common Shares',
    'last': 263.34,
    'change': 26.97,
    'changePct': 11.41
  },
  {
    'symbol': 'GLW',
    'name': 'Corning Incorporated Common Stock',
    'last': 37.31,
    'change': 0.72,
    'changePct': 1.968
  },
  {
    'symbol': 'GM',
    'name': 'General Motors Company Common Stock',
    'last': 43.85,
    'change': 1.72,
    'changePct': 4.083
  },
  {
    'symbol': 'GNRC',
    'name': 'Generac Holdlings Inc. Common Stock',
    'last': 305.46,
    'change': 18.48,
    'changePct': 6.439
  },
  {
    'symbol': 'GOLD',
    'name': 'Barrick Gold Corporation Common Stock (BC)',
    'last': 23.61,
    'change': -0.16,
    'changePct': -0.673
  },
  {
    'symbol': 'GPC',
    'name': 'Genuine Parts Company Common Stock',
    'last': 128.07,
    'change': 3.54,
    'changePct': 2.843
  },
  {
    'symbol': 'GPN',
    'name': 'Global Payments Inc. Common Stock',
    'last': 133.55,
    'change': 5.05,
    'changePct': 3.93
  },
  {
    'symbol': 'GRMN',
    'name': 'Garmin Ltd. Common Stock (Switzerland)',
    'last': 111.93,
    'change': 2.24,
    'changePct': 2.042
  },
  {
    'symbol': 'GS',
    'name': 'Goldman Sachs Group Inc. (The) Common Stock',
    'last': 340.76,
    'change': 11.6,
    'changePct': 3.524
  },
  {
    'symbol': 'GSK',
    'name': 'GlaxoSmithKline PLC Common Stock',
    'last': 42.1,
    'change': 0.4,
    'changePct': 0.959
  },
  {
    'symbol': 'GWW',
    'name': 'W.W. Grainger Inc. Common Stock',
    'last': 491.18,
    'change': -6.57,
    'changePct': -1.32
  },
  {
    'symbol': 'H',
    'name': 'Hyatt Hotels Corporation Class A Common Stock',
    'last': 94.05,
    'change': 3.35,
    'changePct': 3.693
  },
  {
    'symbol': 'HAL',
    'name': 'Halliburton Company Common Stock',
    'last': 34,
    'change': -0.8,
    'changePct': -2.299
  },
  {
    'symbol': 'HCA',
    'name': 'HCA Healthcare Inc. Common Stock',
    'last': 266.35,
    'change': -0.82,
    'changePct': -0.307
  },
  {
    'symbol': 'HDB',
    'name': 'HDFC Bank Limited Common Stock',
    'last': 61.64,
    'change': 1.53,
    'changePct': 2.545
  },
  {
    'symbol': 'HEI',
    'name': 'Heico Corporation Common Stock',
    'last': 144.85,
    'change': -1.53,
    'changePct': -1.045
  },
  {
    'symbol': 'HES',
    'name': 'Hess Corporation Common Stock',
    'last': 94.75,
    'change': 1.67,
    'changePct': 1.794
  },
  {
    'symbol': 'HIG',
    'name': 'Hartford Financial Services Group Inc. (The) Common Stock',
    'last': 69.74,
    'change': 1.65,
    'changePct': 2.423
  },
  {
    'symbol': 'HLT',
    'name': 'Hilton Worldwide Holdings Inc. Common Stock',
    'last': 150.79,
    'change': 6.55,
    'changePct': 4.541
  },
  {
    'symbol': 'HMC',
    'name': 'Honda Motor Company Ltd. Common Stock',
    'last': 28.28,
    'change': 1.12,
    'changePct': 4.124
  },
  {
    'symbol': 'HPE',
    'name': 'Hewlett Packard Enterprise Company Common Stock',
    'last': 16.76,
    'change': 0.23,
    'changePct': 1.391
  },
  {
    'symbol': 'HPQ',
    'name': 'HP Inc. Common Stock',
    'last': 35.81,
    'change': 0.95,
    'changePct': 2.725
  },
  {
    'symbol': 'HRL',
    'name': 'Hormel Foods Corporation Common Stock',
    'last': 49.37,
    'change': 0.18,
    'changePct': 0.366
  },
  {
    'symbol': 'HSBC',
    'name': 'HSBC Holdings plc. Common Stock',
    'last': 32.68,
    'change': 1.13,
    'changePct': 3.582
  },
  {
    'symbol': 'HSY',
    'name': 'The Hershey Company Common Stock',
    'last': 205.7,
    'change': -3.12,
    'changePct': -1.494
  },
  {
    'symbol': 'HUBB',
    'name': 'Hubbell Inc Common Stock',
    'last': 187.63,
    'change': 5.26,
    'changePct': 2.884
  },
  {
    'symbol': 'HUBS',
    'name': 'HubSpot Inc. Common Stock',
    'last': 448.16,
    'change': 44.69,
    'changePct': 11.076
  },
  {
    'symbol': 'HUM',
    'name': 'Humana Inc. Common Stock',
    'last': 442.82,
    'change': 2.95,
    'changePct': 0.671
  },
  {
    'symbol': 'HWM',
    'name': 'Howmet Aerospace Inc. Common Stock',
    'last': 34.93,
    'change': 0.83,
    'changePct': 2.434
  },
  {
    'symbol': 'IBM',
    'name': 'International Business Machines Corporation Common Stock',
    'last': 127.04,
    'change': 1.4,
    'changePct': 1.114
  },
  {
    'symbol': 'IBN',
    'name': 'ICICI Bank Limited Common Stock',
    'last': 18.8,
    'change': 0.45,
    'changePct': 2.452
  },
  {
    'symbol': 'ICE',
    'name': 'Intercontinental Exchange Inc. Common Stock',
    'last': 131.62,
    'change': 1.36,
    'changePct': 1.044
  },
  {
    'symbol': 'ICL',
    'name': 'ICL Group Ltd. Ordinary Shares',
    'last': 10.39,
    'change': -0.25,
    'changePct': -2.35
  },
  {
    'symbol': 'IEX',
    'name': 'IDEX Corporation Common Stock',
    'last': 196.13,
    'change': 3.45,
    'changePct': 1.791
  },
  {
    'symbol': 'IFF',
    'name': 'International Flavors & Fragrances Inc. Common Stock',
    'last': 124.98,
    'change': 4.5,
    'changePct': 3.735
  },
  {
    'symbol': 'IHG',
    'name': 'Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)',
    'last': 69.8,
    'change': 3.89,
    'changePct': 5.902
  },
  {
    'symbol': 'INFY',
    'name': 'Infosys Limited American Depositary Shares',
    'last': 25.11,
    'change': 0.92,
    'changePct': 3.803
  },
  {
    'symbol': 'ING',
    'name': 'ING Group N.V. Common Stock',
    'last': 10.6,
    'change': 0.62,
    'changePct': 6.212
  },
  {
    'symbol': 'INVH',
    'name': 'Invitation Homes Inc. Common Stock',
    'last': 39.8,
    'change': 0.3,
    'changePct': 0.759
  },
  {
    'symbol': 'IP',
    'name': 'International Paper Company Common Stock',
    'last': 44.16,
    'change': 0.97,
    'changePct': 2.246
  },
  {
    'symbol': 'IPG',
    'name': 'Interpublic Group of Companies Inc. (The) Common Stock',
    'last': 36.25,
    'change': 1.41,
    'changePct': 4.047
  },
  {
    'symbol': 'IQV',
    'name': 'IQVIA Holdings Inc. Common Stock',
    'last': 220.27,
    'change': 5.26,
    'changePct': 2.446
  },
  {
    'symbol': 'IR',
    'name': 'Ingersoll Rand Inc. Common Stock',
    'last': 50.2,
    'change': 1.8,
    'changePct': 3.719
  },
  {
    'symbol': 'IRM',
    'name': 'Iron Mountain Incorporated (Delaware)Common Stock REIT',
    'last': 49.11,
    'change': 0.43,
    'changePct': 0.883
  },
  {
    'symbol': 'IT',
    'name': 'Gartner Inc. Common Stock',
    'last': 288.12,
    'change': 8.53,
    'changePct': 3.051
  },
  {
    'symbol': 'ITUB',
    'name': 'Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)',
    'last': 4.97,
    'change': 0.13,
    'changePct': 2.686
  },
  {
    'symbol': 'ITW',
    'name': 'Illinois Tool Works Inc. Common Stock',
    'last': 209.99,
    'change': 1.54,
    'changePct': 0.739
  },
  {
    'symbol': 'IX',
    'name': 'Orix Corp Ads Common Stock',
    'last': 98.41,
    'change': 3.33,
    'changePct': 3.502
  },
  {
    'symbol': 'J',
    'name': 'Jacobs Engineering Group Inc. Common Stock',
    'last': 135.68,
    'change': 4.47,
    'changePct': 3.407
  },
  {
    'symbol': 'JCI',
    'name': 'Johnson Controls International plc Ordinary Share',
    'last': 64.62,
    'change': 3.13,
    'changePct': 5.09
  },
  {
    'symbol': 'JHX',
    'name': 'James Hardie Industries plc American Depositary Shares (Ireland)',
    'last': 33.35,
    'change': 1.36,
    'changePct': 4.251
  },
  {
    'symbol': 'JLL',
    'name': 'Jones Lang LaSalle Incorporated Common Stock',
    'last': 237.49,
    'change': 13.81,
    'changePct': 6.174
  },
  {
    'symbol': 'JNPR',
    'name': 'Juniper Networks Inc. Common Stock',
    'last': 34.17,
    'change': -0.21,
    'changePct': -0.611
  },
  {
    'symbol': 'K',
    'name': 'Kellogg Company Common Stock',
    'last': 60.96,
    'change': -0.36,
    'changePct': -0.587
  },
  {
    'symbol': 'KB',
    'name': 'KB Financial Group Inc',
    'last': 47.47,
    'change': 1.74,
    'changePct': 3.805
  },
  {
    'symbol': 'KEP',
    'name': 'Korea Electric Power Corporation Common Stock',
    'last': 10.18,
    'change': 0.25,
    'changePct': 2.518
  },
  {
    'symbol': 'KEY',
    'name': 'KeyCorp Common Stock',
    'last': 24.36,
    'change': 0.52,
    'changePct': 2.181
  },
  {
    'symbol': 'KEYS',
    'name': 'Keysight Technologies Inc. Common Stock',
    'last': 154.41,
    'change': 4.75,
    'changePct': 3.174
  },
  {
    'symbol': 'KIM',
    'name': 'Kimco Realty Corporation Common Stock',
    'last': 23.87,
    'change': 0.22,
    'changePct': 0.93
  },
  {
    'symbol': 'KKR',
    'name': 'KKR & Co. Inc. Common Stock',
    'last': 55.46,
    'change': 3.38,
    'changePct': 6.49
  },
  {
    'symbol': 'KMB',
    'name': 'Kimberly-Clark Corporation Common Stock',
    'last': 121.42,
    'change': 0.37,
    'changePct': 0.306
  },
  {
    'symbol': 'KMI',
    'name': 'Kinder Morgan Inc. Common Stock',
    'last': 17.25,
    'change': -0.07,
    'changePct': -0.404
  },
  {
    'symbol': 'KMX',
    'name': 'CarMax Inc',
    'last': 102.02,
    'change': 1.1,
    'changePct': 1.09
  },
  {
    'symbol': 'KOF',
    'name': 'Coca Cola Femsa S.A.B. de C.V.  American Depositary Shares each representing 10 Units (each Unit consists of 3 Series B Shares and 5 Series L Shares)',
    'last': 52.41,
    'change': 1.39,
    'changePct': 2.724
  },
  {
    'symbol': 'KR',
    'name': 'Kroger Company (The) Common Stock',
    'last': 54.99,
    'change': -1.2,
    'changePct': -2.136
  },
  {
    'symbol': 'L',
    'name': 'Loews Corporation Common Stock',
    'last': 63.31,
    'change': 0.64,
    'changePct': 1.021
  },
  {
    'symbol': 'LDOS',
    'name': 'Leidos Holdings Inc. Common Stock',
    'last': 102.06,
    'change': -1.91,
    'changePct': -1.837
  },
  {
    'symbol': 'LEN',
    'name': 'Lennar Corporation Class A Common Stock',
    'last': 88.51,
    'change': 2.24,
    'changePct': 2.596
  },
  {
    'symbol': 'LFC',
    'name': 'China Life Insurance Company Limited American Depositary Shares',
    'last': 7.76,
    'change': 0.59,
    'changePct': 8.229
  },
  {
    'symbol': 'LH',
    'name': 'Laboratory Corporation of America Holdings Common Stock',
    'last': 274.02,
    'change': 2.49,
    'changePct': 0.917
  },
  {
    'symbol': 'LHX',
    'name': 'L3Harris Technologies Inc. Common Stock',
    'last': 243.43,
    'change': -14.68,
    'changePct': -5.687
  },
  {
    'symbol': 'LIN',
    'name': 'Linde plc Ordinary Share',
    'last': 304.53,
    'change': 10.43,
    'changePct': 3.546
  },
  {
    'symbol': 'LMT',
    'name': 'Lockheed Martin Corporation Common Stock',
    'last': 421.34,
    'change': -27.33,
    'changePct': -6.091
  },
  {
    'symbol': 'LNC',
    'name': 'Lincoln National Corporation Common Stock',
    'last': 65.91,
    'change': 3.78,
    'changePct': 6.084
  },
  {
    'symbol': 'LOW',
    'name': 'Lowe\'s Companies Inc. Common Stock',
    'last': 231.33,
    'change': 0.26,
    'changePct': 0.113
  },
  {
    'symbol': 'LSI',
    'name': 'Life Storage Inc. Common Stock',
    'last': 132.35,
    'change': 2.27,
    'changePct': 1.745
  },
  {
    'symbol': 'LU',
    'name': 'Lufax Holding Ltd American Depositary Shares two of which representing one Ordinary Share',
    'last': 6.35,
    'change': 1.71,
    'changePct': 36.853
  },
  {
    'symbol': 'LUMN',
    'name': 'Lumen Technologies Inc. Common Stock',
    'last': 10.82,
    'change': 0.04,
    'changePct': 0.371
  },
  {
    'symbol': 'LUV',
    'name': 'Southwest Airlines Company Common Stock',
    'last': 43.12,
    'change': 1.06,
    'changePct': 2.52
  },
  {
    'symbol': 'LVS',
    'name': 'Las Vegas Sands Corp. Common Stock',
    'last': 36.54,
    'change': 3.88,
    'changePct': 11.88
  },
  {
    'symbol': 'LYB',
    'name': 'LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)',
    'last': 100.84,
    'change': 2.19,
    'changePct': 2.22
  },
  {
    'symbol': 'LYG',
    'name': 'Lloyds Banking Group Plc American Depositary Shares',
    'last': 2.53,
    'change': 0.08,
    'changePct': 3.265
  },
  {
    'symbol': 'LYV',
    'name': 'Live Nation Entertainment Inc. Common Stock',
    'last': 112.01,
    'change': 0.25,
    'changePct': 0.224
  },
  {
    'symbol': 'MAA',
    'name': 'Mid-America Apartment Communities Inc. Common Stock',
    'last': 207.84,
    'change': 2.26,
    'changePct': 1.099
  },
  {
    'symbol': 'MAS',
    'name': 'Masco Corporation Common Stock',
    'last': 56.12,
    'change': 0.47,
    'changePct': 0.845
  },
  {
    'symbol': 'MCD',
    'name': 'McDonald\'s Corporation Common Stock',
    'last': 238.14,
    'change': 5.57,
    'changePct': 2.395
  },
  {
    'symbol': 'MCK',
    'name': 'McKesson Corporation Common Stock',
    'last': 291.36,
    'change': 0.73,
    'changePct': 0.251
  },
  {
    'symbol': 'MCO',
    'name': 'Moody\'s Corporation Common Stock',
    'last': 314.86,
    'change': 8.15,
    'changePct': 2.657
  },
  {
    'symbol': 'MDT',
    'name': 'Medtronic plc. Ordinary Shares',
    'last': 107.3,
    'change': 1.9,
    'changePct': 1.803
  },
  {
    'symbol': 'MET',
    'name': 'MetLife Inc. Common Stock',
    'last': 67.52,
    'change': 2.2,
    'changePct': 3.368
  },
  {
    'symbol': 'MFC',
    'name': 'Manulife Financial Corporation Common Stock',
    'last': 20.1,
    'change': 0.9,
    'changePct': 4.688
  },
  {
    'symbol': 'MFG',
    'name': 'Mizuho Financial Group Inc. Sponosred ADR (Japan)',
    'last': 2.78,
    'change': 0.06,
    'changePct': 2.206
  },
  {
    'symbol': 'MGA',
    'name': 'Magna International Inc. Common Stock',
    'last': 60.96,
    'change': 2.63,
    'changePct': 4.509
  },
  {
    'symbol': 'MGM',
    'name': 'MGM Resorts International Common Stock',
    'last': 42.17,
    'change': 2.08,
    'changePct': 5.188
  },
  {
    'symbol': 'MKC',
    'name': 'McCormick & Company Incorporated Common Stock',
    'last': 96.83,
    'change': -1.45,
    'changePct': -1.475
  },
  {
    'symbol': 'MKL',
    'name': 'Markel Corporation Common Stock',
    'last': 1383.72,
    'change': 10.93,
    'changePct': 0.796
  },
  {
    'symbol': 'MLM',
    'name': 'Martin Marietta Materials Inc. Common Stock',
    'last': 379.1,
    'change': -1.37,
    'changePct': -0.36
  },
  {
    'symbol': 'MMC',
    'name': 'Marsh & McLennan Companies Inc. Common Stock',
    'last': 158,
    'change': 2.7,
    'changePct': 1.739
  },
  {
    'symbol': 'MMM',
    'name': '3M Company Common Stock',
    'last': 145.51,
    'change': 1.2,
    'changePct': 0.832
  },
  {
    'symbol': 'MMP',
    'name': 'Magellan Midstream Partners L.P. Limited Partnership',
    'last': 47.19,
    'change': 0.18,
    'changePct': 0.383
  },
  {
    'symbol': 'MO',
    'name': 'Altria Group Inc.',
    'last': 51.28,
    'change': -0.26,
    'changePct': -0.504
  },
  {
    'symbol': 'MOH',
    'name': 'Molina Healthcare Inc Common Stock',
    'last': 329.85,
    'change': 2.08,
    'changePct': 0.635
  },
  {
    'symbol': 'MOS',
    'name': 'Mosaic Company (The) Common Stock',
    'last': 57.57,
    'change': -0.86,
    'changePct': -1.472
  },
  {
    'symbol': 'MPC',
    'name': 'Marathon Petroleum Corporation Common Stock',
    'last': 74.86,
    'change': 0.46,
    'changePct': 0.618
  },
  {
    'symbol': 'MPLX',
    'name': 'MPLX LP Common Units Representing Limited Partner Interests',
    'last': 31.62,
    'change': 0.23,
    'changePct': 0.733
  },
  {
    'symbol': 'MPW',
    'name': 'Medical Properties Trust Inc. common stock',
    'last': 19.94,
    'change': -0.13,
    'changePct': -0.648
  },
  {
    'symbol': 'MRK',
    'name': 'Merck & Company Inc. Common Stock (new)',
    'last': 78.12,
    'change': -0.52,
    'changePct': -0.661
  },
  {
    'symbol': 'MRO',
    'name': 'Marathon Oil Corporation Common Stock',
    'last': 21.59,
    'change': -0.06,
    'changePct': -0.277
  },
  {
    'symbol': 'MS',
    'name': 'Morgan Stanley Common Stock',
    'last': 91.76,
    'change': 5.43,
    'changePct': 6.29
  },
  {
    'symbol': 'MSCI',
    'name': 'MSCI Inc Common Stock',
    'last': 492.96,
    'change': 22.02,
    'changePct': 4.676
  },
  {
    'symbol': 'MSI',
    'name': 'Motorola Solutions Inc. Common Stock',
    'last': 226.84,
    'change': 2.11,
    'changePct': 0.939
  },
  {
    'symbol': 'MT',
    'name': 'Arcelor Mittal NY Registry Shares NEW',
    'last': 32.04,
    'change': 1.91,
    'changePct': 6.339
  },
  {
    'symbol': 'MTB',
    'name': 'M&T Bank Corporation Common Stock',
    'last': 181.41,
    'change': 6.4,
    'changePct': 3.657
  },
  {
    'symbol': 'MTD',
    'name': 'Mettler-Toledo International Inc. Common Stock',
    'last': 1358.84,
    'change': 39.39,
    'changePct': 2.985
  },
  {
    'symbol': 'MTN',
    'name': 'Vail Resorts Inc. Common Stock',
    'last': 267.84,
    'change': 18.68,
    'changePct': 7.497
  },
  {
    'symbol': 'MUFG',
    'name': 'Mitsubishi UFJ Financial Group Inc. Common Stock',
    'last': 6.4,
    'change': 0.14,
    'changePct': 2.236
  },
  {
    'symbol': 'NEE',
    'name': 'NextEra Energy Inc. Common Stock',
    'last': 82.51,
    'change': 0.53,
    'changePct': 0.646
  },
  {
    'symbol': 'NEM',
    'name': 'Newmont Corporation',
    'last': 72.61,
    'change': -0.76,
    'changePct': -1.036
  },
  {
    'symbol': 'NET',
    'name': 'Cloudflare Inc. Class A Common Stock',
    'last': 95.16,
    'change': 9.22,
    'changePct': 10.728
  },
  {
    'symbol': 'NGG',
    'name': 'National Grid Transco PLC National Grid PLC (NEW) American Depositary Shares',
    'last': 73.98,
    'change': -1.62,
    'changePct': -2.143
  },
  {
    'symbol': 'NI',
    'name': 'NiSource Inc Common Stock',
    'last': 30.09,
    'change': 0.24,
    'changePct': 0.804
  },
  {
    'symbol': 'NIO',
    'name': 'NIO Inc. American depositary shares each  representing one Class A ordinary share',
    'last': 18.75,
    'change': 3.82,
    'changePct': 25.586
  },
  {
    'symbol': 'NKE',
    'name': 'Nike Inc. Common Stock',
    'last': 125.19,
    'change': 5.79,
    'changePct': 4.849
  },
  {
    'symbol': 'NLY',
    'name': 'Annaly Capital Management Inc Common Stock',
    'last': 7.08,
    'change': -0.01,
    'changePct': -0.141
  },
  {
    'symbol': 'NMR',
    'name': 'Nomura Holdings Inc ADR American Depositary Shares',
    'last': 4.4,
    'change': 0.08,
    'changePct': 1.852
  },
  {
    'symbol': 'NOC',
    'name': 'Northrop Grumman Corporation Common Stock',
    'last': 424.43,
    'change': -23.39,
    'changePct': -5.223
  },
  {
    'symbol': 'NOK',
    'name': 'Nokia Corporation Sponsored American Depositary Shares',
    'last': 5.26,
    'change': 0.16,
    'changePct': 3.137
  },
  {
    'symbol': 'NOW',
    'name': 'ServiceNow Inc. Common Stock',
    'last': 547.4,
    'change': 33.18,
    'changePct': 6.452
  },
  {
    'symbol': 'NSC',
    'name': 'Norfolk Southern Corporation Common Stock',
    'last': 273.32,
    'change': 5.26,
    'changePct': 1.962
  },
  {
    'symbol': 'NTR',
    'name': 'Nutrien Ltd. Common Shares',
    'last': 93.82,
    'change': -3.61,
    'changePct': -3.705
  },
  {
    'symbol': 'NU',
    'name': 'Nu Holdings Ltd. Class A Ordinary Shares',
    'last': 6.88,
    'change': 0.9,
    'changePct': 15.05
  },
  {
    'symbol': 'NUE',
    'name': 'Nucor Corporation Common Stock',
    'last': 135.11,
    'change': -0.41,
    'changePct': -0.303
  },
  {
    'symbol': 'NVR',
    'name': 'NVR Inc. Common Stock',
    'last': 4854.43,
    'change': 40.82,
    'changePct': 0.848
  },
  {
    'symbol': 'NVS',
    'name': 'Novartis AG Common Stock',
    'last': 84.64,
    'change': -0.09,
    'changePct': -0.106
  },
  {
    'symbol': 'NWG',
    'name': 'NatWest Group plc American Depositary Shares',
    'last': 5.84,
    'change': 0.17,
    'changePct': 2.998
  },
  {
    'symbol': 'O',
    'name': 'Realty Income Corporation Common Stock',
    'last': 65.6,
    'change': 0.48,
    'changePct': 0.737
  },
  {
    'symbol': 'OKE',
    'name': 'ONEOK Inc. Common Stock',
    'last': 64.66,
    'change': 0.4,
    'changePct': 0.622
  },
  {
    'symbol': 'OMC',
    'name': 'Omnicom Group Inc. Common Stock',
    'last': 84.06,
    'change': 3.33,
    'changePct': 4.125
  },
  {
    'symbol': 'ORAN',
    'name': 'Orange',
    'last': 11.68,
    'change': -0.01,
    'changePct': -0.086
  },
  {
    'symbol': 'OTIS',
    'name': 'Otis Worldwide Corporation Common Stock',
    'last': 75.5,
    'change': 1.85,
    'changePct': 2.512
  },
  {
    'symbol': 'OVV',
    'name': 'Ovintiv Inc. (DE)',
    'last': 43.75,
    'change': 0.63,
    'changePct': 1.461
  },
  {
    'symbol': 'OXY',
    'name': 'Occidental Petroleum Corporation Common Stock',
    'last': 52.99,
    'change': -1.54,
    'changePct': -2.824
  },
  {
    'symbol': 'PATH',
    'name': 'UiPath Inc. Class A Common Stock',
    'last': 27.82,
    'change': 2.93,
    'changePct': 11.772
  },
  {
    'symbol': 'PAYC',
    'name': 'Paycom Software Inc. Common Stock',
    'last': 327.22,
    'change': 21.21,
    'changePct': 6.931
  },
  {
    'symbol': 'PBA',
    'name': 'Pembina Pipeline Corp. Ordinary Shares (Canada)',
    'last': 35.9,
    'change': 0.33,
    'changePct': 0.928
  },
  {
    'symbol': 'PBR',
    'name': 'Petroleo Brasileiro S.A.- Petrobras Common Stock',
    'last': 13.26,
    'change': 0.19,
    'changePct': 1.454
  },
  {
    'symbol': 'PCG',
    'name': 'Pacific Gas & Electric Co. Common Stock',
    'last': 12,
    'change': 0.5,
    'changePct': 4.348
  },
  {
    'symbol': 'PEAK',
    'name': 'Healthpeak Properties Inc. Common Stock',
    'last': 33.14,
    'change': 0.49,
    'changePct': 1.501
  },
  {
    'symbol': 'PEG',
    'name': 'Public Service Enterprise Group Incorporated Common Stock',
    'last': 67.71,
    'change': 0.18,
    'changePct': 0.267
  },
  {
    'symbol': 'PGR',
    'name': 'Progressive Corporation (The) Common Stock',
    'last': 106.14,
    'change': -1.17,
    'changePct': -1.09
  },
  {
    'symbol': 'PH',
    'name': 'Parker-Hannifin Corporation Common Stock',
    'last': 285.91,
    'change': 6.77,
    'changePct': 2.425
  },
  {
    'symbol': 'PHG',
    'name': 'Koninklijke Philips N.V. NY Registry Shares',
    'last': 32.11,
    'change': 0.89,
    'changePct': 2.851
  },
  {
    'symbol': 'PHM',
    'name': 'PulteGroup Inc. Common Stock',
    'last': 46.61,
    'change': 0.16,
    'changePct': 0.344
  },
  {
    'symbol': 'PINS',
    'name': 'Pinterest Inc. Class A Common Stock',
    'last': 24.31,
    'change': 1.57,
    'changePct': 6.904
  },
  {
    'symbol': 'PKG',
    'name': 'Packaging Corporation of America Common Stock',
    'last': 155.34,
    'change': 2.99,
    'changePct': 1.963
  },
  {
    'symbol': 'PKI',
    'name': 'PerkinElmer Inc. Common Stock',
    'last': 176.1,
    'change': 7.22,
    'changePct': 4.275
  },
  {
    'symbol': 'PKX',
    'name': 'POSCO Holdings Inc. American Depositary Shares (Each representing 1/4th of a share of Common Stock)',
    'last': 59,
    'change': 2,
    'changePct': 3.509
  },
  {
    'symbol': 'PLD',
    'name': 'Prologis Inc. Common Stock',
    'last': 154.57,
    'change': 2.73,
    'changePct': 1.798
  },
  {
    'symbol': 'PLTR',
    'name': 'Palantir Technologies Inc. Class A Common Stock',
    'last': 11.79,
    'change': 1.02,
    'changePct': 9.471
  },
  {
    'symbol': 'PM',
    'name': 'Philip Morris International Inc Common Stock',
    'last': 93.77,
    'change': 1.11,
    'changePct': 1.198
  },
  {
    'symbol': 'PNC',
    'name': 'PNC Financial Services Group Inc. (The) Common Stock',
    'last': 192.39,
    'change': 7.15,
    'changePct': 3.86
  },
  {
    'symbol': 'PPG',
    'name': 'PPG Industries Inc. Common Stock',
    'last': 127.87,
    'change': 4.5,
    'changePct': 3.648
  },
  {
    'symbol': 'PPL',
    'name': 'PPL Corporation Common Stock',
    'last': 26.62,
    'change': 0.12,
    'changePct': 0.453
  },
  {
    'symbol': 'PRU',
    'name': 'Prudential Financial Inc. Common Stock',
    'last': 113.96,
    'change': 4.17,
    'changePct': 3.798
  },
  {
    'symbol': 'PSA',
    'name': 'Public Storage Common Stock',
    'last': 357.72,
    'change': 2.58,
    'changePct': 0.726
  },
  {
    'symbol': 'PSX',
    'name': 'Phillips 66 Common Stock',
    'last': 76.5,
    'change': 1.16,
    'changePct': 1.54
  },
  {
    'symbol': 'PTR',
    'name': 'PetroChina Company Limited Common Stock',
    'last': 46.49,
    'change': 1.73,
    'changePct': 3.865
  },
  {
    'symbol': 'PUK',
    'name': 'Prudential Public Limited Company Common Stock',
    'last': 28.25,
    'change': 1.64,
    'changePct': 6.163
  },
  {
    'symbol': 'PWR',
    'name': 'Quanta Services Inc. Common Stock',
    'last': 122.84,
    'change': 1.17,
    'changePct': 0.962
  },
  {
    'symbol': 'PXD',
    'name': 'Pioneer Natural Resources Company Common Stock',
    'last': 230.31,
    'change': 2.52,
    'changePct': 1.106
  },
  {
    'symbol': 'QGEN',
    'name': 'Qiagen N.V. Common Shares',
    'last': 47.09,
    'change': 1.89,
    'changePct': 4.181
  },
  {
    'symbol': 'QSR',
    'name': 'Restaurant Brands International Inc. Common Shares',
    'last': 57.39,
    'change': 1.04,
    'changePct': 1.846
  },
  {
    'symbol': 'RACE',
    'name': 'Ferrari N.V. Common Shares',
    'last': 208.9,
    'change': 13.7,
    'changePct': 7.018
  },
  {
    'symbol': 'RBLX',
    'name': 'Roblox Corporation Class A Common Stock',
    'last': 41.51,
    'change': 3.64,
    'changePct': 9.612
  },
  {
    'symbol': 'RCI',
    'name': 'Rogers Communication Inc. Common Stock',
    'last': 53.43,
    'change': -0.06,
    'changePct': -0.112
  },
  {
    'symbol': 'RCL',
    'name': 'D/B/A Royal Caribbean Cruises Ltd. Common Stock',
    'last': 74.55,
    'change': 3.85,
    'changePct': 5.446
  },
  {
    'symbol': 'RE',
    'name': 'Everest Re Group Ltd. Common Stock',
    'last': 283.4,
    'change': 4.64,
    'changePct': 1.665
  },
  {
    'symbol': 'RELX',
    'name': 'RELX PLC PLC American Depositary Shares (Each representing One Ordinary Share)',
    'last': 29.49,
    'change': 0.95,
    'changePct': 3.329
  },
  {
    'symbol': 'REXR',
    'name': 'Rexford Industrial Realty Inc. Common Stock',
    'last': 71.2,
    'change': 0.45,
    'changePct': 0.636
  },
  {
    'symbol': 'RF',
    'name': 'Regions Financial Corporation Common Stock',
    'last': 23.54,
    'change': 0.75,
    'changePct': 3.291
  },
  {
    'symbol': 'RHI',
    'name': 'Robert Half International Inc. Common Stock',
    'last': 116.04,
    'change': 3.11,
    'changePct': 2.754
  },
  {
    'symbol': 'RIO',
    'name': 'Rio Tinto Plc Common Stock',
    'last': 72.72,
    'change': 3.64,
    'changePct': 5.269
  },
  {
    'symbol': 'RJF',
    'name': 'Raymond James Financial Inc. Common Stock',
    'last': 103.79,
    'change': 4.32,
    'changePct': 4.343
  },
  {
    'symbol': 'RMD',
    'name': 'ResMed Inc. Common Stock',
    'last': 255.36,
    'change': 11.05,
    'changePct': 4.523
  },
  {
    'symbol': 'RNG',
    'name': 'RingCentral Inc. Class A Common Stock',
    'last': 107.79,
    'change': 5.29,
    'changePct': 5.161
  },
  {
    'symbol': 'ROK',
    'name': 'Rockwell Automation Inc. Common Stock',
    'last': 268.48,
    'change': 7.46,
    'changePct': 2.858
  },
  {
    'symbol': 'ROL',
    'name': 'Rollins Inc. Common Stock',
    'last': 33.76,
    'change': 0.33,
    'changePct': 0.987
  },
  {
    'symbol': 'ROP',
    'name': 'Roper Technologies Inc. Common Stock',
    'last': 453.46,
    'change': 7.66,
    'changePct': 1.718
  },
  {
    'symbol': 'RPM',
    'name': 'RPM International Inc. Common Stock',
    'last': 82.01,
    'change': 0.59,
    'changePct': 0.725
  },
  {
    'symbol': 'RRX',
    'name': 'Regal Rexnord Corporation Common Stock',
    'last': 160.57,
    'change': 4.48,
    'changePct': 2.87
  },
  {
    'symbol': 'RS',
    'name': 'Reliance Steel & Aluminum Co. Common Stock (DE)',
    'last': 189.47,
    'change': -0.57,
    'changePct': -0.3
  },
  {
    'symbol': 'RSG',
    'name': 'Republic Services Inc. Common Stock',
    'last': 130.03,
    'change': 0.97,
    'changePct': 0.752
  },
  {
    'symbol': 'RTX',
    'name': 'Raytheon Technologies Corporation Common Stock',
    'last': 95.8,
    'change': -1.82,
    'changePct': -1.864
  },
  {
    'symbol': 'RY',
    'name': 'Royal Bank Of Canada Common Stock',
    'last': 111.08,
    'change': 1.36,
    'changePct': 1.24
  },
  {
    'symbol': 'SAN',
    'name': 'Banco Santander S.A. Sponsored ADR (Spain)',
    'last': 3.43,
    'change': 0.17,
    'changePct': 5.215
  },
  {
    'symbol': 'SAP',
    'name': 'SAP  SE ADS',
    'last': 114.49,
    'change': 3.76,
    'changePct': 3.396
  },
  {
    'symbol': 'SBSW',
    'name': 'D/B/A Sibanye-Stillwater Limited ADS',
    'last': 17.05,
    'change': -0.09,
    'changePct': -0.525
  },
  {
    'symbol': 'SCCO',
    'name': 'Southern Copper Corporation Common Stock',
    'last': 70.47,
    'change': 2.05,
    'changePct': 2.996
  },
  {
    'symbol': 'SCHW',
    'name': 'Charles Schwab Corporation (The) Common Stock',
    'last': 88.94,
    'change': 5.77,
    'changePct': 6.938
  },
  {
    'symbol': 'SCI',
    'name': 'Service Corporation International Common Stock',
    'last': 64.11,
    'change': 0.95,
    'changePct': 1.504
  },
  {
    'symbol': 'SE',
    'name': 'Sea Limited American Depositary Shares each representing one Class A Ordinary Share',
    'last': 111.36,
    'change': 17.59,
    'changePct': 18.759
  },
  {
    'symbol': 'SHEL',
    'name': 'Royal Dutch Shell PLC American Depositary Shares (each representing two (2) Ordinary Shares)',
    'last': 50.23,
    'change': -0.12,
    'changePct': -0.238
  },
  {
    'symbol': 'SHG',
    'name': 'Shinhan Financial Group Co Ltd American Depositary Shares',
    'last': 31.73,
    'change': 1.05,
    'changePct': 3.422
  },
  {
    'symbol': 'SHOP',
    'name': 'Shopify Inc. Class A Subordinate Voting Shares',
    'last': 622.38,
    'change': 68.95,
    'changePct': 12.459
  },
  {
    'symbol': 'SHW',
    'name': 'Sherwin-Williams Company (The) Common Stock',
    'last': 244.38,
    'change': 1.94,
    'changePct': 0.8
  },
  {
    'symbol': 'SJM',
    'name': 'J.M. Smucker Company (The) New Common Stock',
    'last': 129.34,
    'change': 0.04,
    'changePct': 0.031
  },
  {
    'symbol': 'SJR',
    'name': 'Shaw Communications Inc. Common Stock',
    'last': 30.44,
    'change': 0.37,
    'changePct': 1.23
  },
  {
    'symbol': 'SKM',
    'name': 'SK Telecom Co. Ltd. Common Stock',
    'last': 26.38,
    'change': 0.77,
    'changePct': 3.007
  },
  {
    'symbol': 'SLB',
    'name': 'Schlumberger N.V. Common Stock',
    'last': 37.88,
    'change': -1.38,
    'changePct': -3.515
  },
  {
    'symbol': 'SLF',
    'name': 'Sun Life Financial Inc. Common Stock',
    'last': 54.85,
    'change': 1.39,
    'changePct': 2.6
  },
  {
    'symbol': 'SMFG',
    'name': 'Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)',
    'last': 6.89,
    'change': 0.11,
    'changePct': 1.622
  },
  {
    'symbol': 'SNA',
    'name': 'Snap-On Incorporated Common Stock',
    'last': 206.22,
    'change': 3.63,
    'changePct': 1.792
  },
  {
    'symbol': 'SNAP',
    'name': 'Snap Inc. Class A Common Stock',
    'last': 32.56,
    'change': 2.98,
    'changePct': 10.074
  },
  {
    'symbol': 'SNN',
    'name': 'Smith & Nephew SNATS Inc. Common Stock',
    'last': 33.03,
    'change': 1.6,
    'changePct': 5.091
  },
  {
    'symbol': 'SNOW',
    'name': 'Snowflake Inc. Class A Common Stock',
    'last': 197.84,
    'change': 27.06,
    'changePct': 15.845
  },
  {
    'symbol': 'SNP',
    'name': 'China Petroleum & Chemical Corporation Common Stock',
    'last': 44.22,
    'change': 2.38,
    'changePct': 5.688
  },
  {
    'symbol': 'SNX',
    'name': 'TD SYNNEX Corporation Common Stock',
    'last': 112.6,
    'change': 3.55,
    'changePct': 3.255
  },
  {
    'symbol': 'SO',
    'name': 'Southern Company (The) Common Stock',
    'last': 68.52,
    'change': -0.14,
    'changePct': -0.204
  },
  {
    'symbol': 'SONY',
    'name': 'Sony Group Corporation American Depositary Shares',
    'last': 102.75,
    'change': 4.65,
    'changePct': 4.74
  },
  {
    'symbol': 'SPG',
    'name': 'Simon Property Group Inc. Common Stock',
    'last': 131.33,
    'change': 2.45,
    'changePct': 1.901
  },
  {
    'symbol': 'SPGI',
    'name': 'S&P Global Inc. Common Stock',
    'last': 392.23,
    'change': 4.84,
    'changePct': 1.249
  },
  {
    'symbol': 'SPOT',
    'name': 'Spotify Technology S.A. Ordinary Shares',
    'last': 133.58,
    'change': 9.74,
    'changePct': 7.865
  },
  {
    'symbol': 'SQ',
    'name': 'Block Inc. Class A Common Stock',
    'last': 116.05,
    'change': 12.96,
    'changePct': 12.572
  },
  {
    'symbol': 'SQM',
    'name': 'Sociedad Quimica y Minera S.A. Common Stock',
    'last': 73.03,
    'change': 2.22,
    'changePct': 3.135
  },
  {
    'symbol': 'SRE',
    'name': 'DBA Sempra Common Stock',
    'last': 154.37,
    'change': -0.64,
    'changePct': -0.413
  },
  {
    'symbol': 'SSL',
    'name': 'Sasol Ltd. American Depositary Shares',
    'last': 22.53,
    'change': 0.64,
    'changePct': 2.924
  },
  {
    'symbol': 'STE',
    'name': 'STERIS plc (Ireland) Ordinary Shares',
    'last': 227.04,
    'change': 4.8,
    'changePct': 2.16
  },
  {
    'symbol': 'STLA',
    'name': 'Stellantis N.V. Common Shares',
    'last': 16.66,
    'change': 1.17,
    'changePct': 7.553
  },
  {
    'symbol': 'STM',
    'name': 'STMicroelectronics N.V. Common Stock',
    'last': 42.06,
    'change': 3.19,
    'changePct': 8.207
  },
  {
    'symbol': 'STT',
    'name': 'State Street Corporation Common Stock',
    'last': 87.45,
    'change': 3.48,
    'changePct': 4.144
  },
  {
    'symbol': 'STZ',
    'name': 'Constellation Brands Inc. Common Stock',
    'last': 222.34,
    'change': 0.21,
    'changePct': 0.095
  },
  {
    'symbol': 'SU',
    'name': 'Suncor Energy  Inc. Common Stock',
    'last': 29.92,
    'change': 0.21,
    'changePct': 0.707
  },
  {
    'symbol': 'SUI',
    'name': 'Sun Communities Inc. Common Stock',
    'last': 175.08,
    'change': 2.51,
    'changePct': 1.454
  },
  {
    'symbol': 'SUZ',
    'name': 'Suzano S.A. American Depositary Shares (each representing One Ordinary Share)',
    'last': 11.9,
    'change': 0.56,
    'changePct': 4.938
  },
  {
    'symbol': 'SWK',
    'name': 'Stanley Black & Decker Inc. Common Stock',
    'last': 148.4,
    'change': 2.64,
    'changePct': 1.811
  },
  {
    'symbol': 'SYF',
    'name': 'Synchrony Financial Common Stock',
    'last': 37.67,
    'change': 1.53,
    'changePct': 4.234
  },
  {
    'symbol': 'SYK',
    'name': 'Stryker Corporation Common Stock',
    'last': 262.16,
    'change': 7.82,
    'changePct': 3.075
  },
  {
    'symbol': 'SYY',
    'name': 'Sysco Corporation Common Stock',
    'last': 80.08,
    'change': 2.29,
    'changePct': 2.944
  },
  {
    'symbol': 'T',
    'name': 'AT&T Inc.',
    'last': 23.19,
    'change': 0.1,
    'changePct': 0.433
  },
  {
    'symbol': 'TAK',
    'name': 'Takeda Pharmaceutical Company Limited American Depositary Shares (each representing 1/2 of a share of Common Stock)',
    'last': 15.02,
    'change': 0.53,
    'changePct': 3.658
  },
  {
    'symbol': 'TAP',
    'name': 'Molson Coors Beverage Company Class B Common Stock',
    'last': 52.13,
    'change': 1.28,
    'changePct': 2.517
  },
  {
    'symbol': 'TD',
    'name': 'Toronto Dominion Bank (The) Common Stock',
    'last': 79.7,
    'change': 1.44,
    'changePct': 1.84
  },
  {
    'symbol': 'TDG',
    'name': 'Transdigm Group Incorporated Common Stock',
    'last': 656,
    'change': 9.97,
    'changePct': 1.543
  },
  {
    'symbol': 'TDY',
    'name': 'Teledyne Technologies Incorporated Common Stock',
    'last': 428.53,
    'change': 2.02,
    'changePct': 0.474
  },
  {
    'symbol': 'TECK',
    'name': 'Teck Resources Ltd Ordinary Shares',
    'last': 37.53,
    'change': -0.18,
    'changePct': -0.477
  },
  {
    'symbol': 'TEF',
    'name': 'Telefonica SA Common Stock',
    'last': 4.49,
    'change': 0.1,
    'changePct': 2.278
  },
  {
    'symbol': 'TEL',
    'name': 'TE Connectivity Ltd. New Switzerland Registered Shares',
    'last': 131.36,
    'change': 3.98,
    'changePct': 3.125
  },
  {
    'symbol': 'TFC',
    'name': 'Truist Financial Corporation Common Stock',
    'last': 59.71,
    'change': 1.69,
    'changePct': 2.913
  },
  {
    'symbol': 'TFX',
    'name': 'Teleflex Incorporated Common Stock',
    'last': 341.12,
    'change': 5.54,
    'changePct': 1.651
  },
  {
    'symbol': 'TGT',
    'name': 'Target Corporation Common Stock',
    'last': 215.59,
    'change': 0.24,
    'changePct': 0.111
  },
  {
    'symbol': 'TJX',
    'name': 'TJX Companies Inc. (The) Common Stock',
    'last': 62.54,
    'change': 0.82,
    'changePct': 1.329
  },
  {
    'symbol': 'TLK',
    'name': 'PT Telekomunikasi Indonesia Tbk',
    'last': 32.67,
    'change': 0.22,
    'changePct': 0.678
  },
  {
    'symbol': 'TRGP',
    'name': 'Targa Resources Inc. Common Stock',
    'last': 65.67,
    'change': 0.73,
    'changePct': 1.124
  },
  {
    'symbol': 'TRI',
    'name': 'Thomson Reuters Corp Ordinary Shares',
    'last': 104.16,
    'change': 1.29,
    'changePct': 1.254
  },
  {
    'symbol': 'TRP',
    'name': 'TC Energy Corporation Common Stock',
    'last': 53.62,
    'change': -0.68,
    'changePct': -1.252
  },
  {
    'symbol': 'TRU',
    'name': 'TransUnion Common Stock',
    'last': 103,
    'change': 4.48,
    'changePct': 4.547
  },
  {
    'symbol': 'TRV',
    'name': 'The Travelers Companies Inc. Common Stock',
    'last': 179.29,
    'change': -0.9,
    'changePct': -0.499
  },
  {
    'symbol': 'TS',
    'name': 'Tenaris S.A. American Depositary Shares',
    'last': 26.55,
    'change': 0.07,
    'changePct': 0.264
  },
  {
    'symbol': 'TSN',
    'name': 'Tyson Foods Inc. Common Stock',
    'last': 87.22,
    'change': 1.52,
    'changePct': 1.774
  },
  {
    'symbol': 'TT',
    'name': 'Trane Technologies plc',
    'last': 156.5,
    'change': 4.21,
    'changePct': 2.764
  },
  {
    'symbol': 'TTE',
    'name': 'TotalEnergies SE',
    'last': 50.11,
    'change': 0.35,
    'changePct': 0.703
  },
  {
    'symbol': 'TTM',
    'name': 'Tata Motors Ltd Tata Motors Limited',
    'last': 28.46,
    'change': 0.86,
    'changePct': 3.116
  },
  {
    'symbol': 'TU',
    'name': 'Telus Corporation Ordinary Shares',
    'last': 25.73,
    'change': 0.25,
    'changePct': 0.981
  },
  {
    'symbol': 'TWLO',
    'name': 'Twilio Inc. Class A Common Stock',
    'last': 144.09,
    'change': 15.16,
    'changePct': 11.758
  },
  {
    'symbol': 'TWTR',
    'name': 'Twitter Inc. Common Stock',
    'last': 35.37,
    'change': 1.4,
    'changePct': 4.121
  },
  {
    'symbol': 'TXT',
    'name': 'Textron Inc. Common Stock',
    'last': 73.58,
    'change': 1.78,
    'changePct': 2.479
  },
  {
    'symbol': 'TYL',
    'name': 'Tyler Technologies Inc. Common Stock',
    'last': 415.07,
    'change': 11.74,
    'changePct': 2.911
  },
  {
    'symbol': 'U',
    'name': 'Unity Software Inc. Common Stock',
    'last': 87.73,
    'change': 10.45,
    'changePct': 13.522
  },
  {
    'symbol': 'UBER',
    'name': 'Uber Technologies Inc. Common Stock',
    'last': 32.61,
    'change': 2.81,
    'changePct': 9.43
  },
  {
    'symbol': 'UBS',
    'name': 'UBS Group AG Registered Ordinary Shares',
    'last': 18.08,
    'change': 0.97,
    'changePct': 5.669
  },
  {
    'symbol': 'UDR',
    'name': 'UDR Inc. Common Stock',
    'last': 57,
    'change': 0.1,
    'changePct': 0.176
  },
  {
    'symbol': 'UHS',
    'name': 'Universal Health Services Inc. Common Stock',
    'last': 149.7,
    'change': 0.72,
    'changePct': 0.483
  },
  {
    'symbol': 'UI',
    'name': 'Ubiquiti Inc. Common Stock',
    'last': 265.83,
    'change': 10.87,
    'changePct': 4.263
  },
  {
    'symbol': 'UL',
    'name': 'Unilever PLC Common Stock',
    'last': 45.08,
    'change': 0.69,
    'changePct': 1.554
  },
  {
    'symbol': 'UMC',
    'name': 'United Microelectronics Corporation (NEW) Common Stock',
    'last': 9.34,
    'change': 0.38,
    'changePct': 4.241
  },
  {
    'symbol': 'UNP',
    'name': 'Union Pacific Corporation Common Stock',
    'last': 264.15,
    'change': 4.02,
    'changePct': 1.545
  },
  {
    'symbol': 'UPS',
    'name': 'United Parcel Service Inc. Common Stock',
    'last': 217.9,
    'change': 7.37,
    'changePct': 3.501
  },
  {
    'symbol': 'URI',
    'name': 'United Rentals Inc. Common Stock',
    'last': 337.56,
    'change': 9.21,
    'changePct': 2.805
  },
  {
    'symbol': 'USB',
    'name': 'U.S. Bancorp Common Stock',
    'last': 56.28,
    'change': 1.88,
    'changePct': 3.456
  },
  {
    'symbol': 'VALE',
    'name': 'VALE S.A.  American Depositary Shares Each Representing one common share',
    'last': 17.75,
    'change': 0.51,
    'changePct': 2.958
  },
  {
    'symbol': 'VEEV',
    'name': 'Veeva Systems Inc. Class A Common Stock',
    'last': 184.82,
    'change': 10.79,
    'changePct': 6.2
  },
  {
    'symbol': 'VFC',
    'name': 'V.F. Corporation Common Stock',
    'last': 56.65,
    'change': 1.62,
    'changePct': 2.944
  },
  {
    'symbol': 'VICI',
    'name': 'VICI Properties Inc. Common Stock',
    'last': 27.29,
    'change': 0.31,
    'changePct': 1.149
  },
  {
    'symbol': 'VIV',
    'name': 'Telefonica Brasil S.A. American Depositary Shares (Each representing One Common Share)',
    'last': 10.01,
    'change': 0.18,
    'changePct': 1.831
  },
  {
    'symbol': 'VLO',
    'name': 'Valero Energy Corporation Common Stock',
    'last': 84.94,
    'change': 0.53,
    'changePct': 0.628
  },
  {
    'symbol': 'VMC',
    'name': 'Vulcan Materials Company (Holding Company) Common Stock',
    'last': 181.28,
    'change': -0.73,
    'changePct': -0.401
  },
  {
    'symbol': 'VMW',
    'name': 'Vmware Inc. Common stock Class A',
    'last': 113,
    'change': 1.84,
    'changePct': 1.655
  },
  {
    'symbol': 'VST',
    'name': 'Vistra Corp. Common Stock',
    'last': 22.59,
    'change': 0.26,
    'changePct': 1.164
  },
  {
    'symbol': 'VTR',
    'name': 'Ventas Inc. Common Stock',
    'last': 58.54,
    'change': 0.32,
    'changePct': 0.55
  },
  {
    'symbol': 'W',
    'name': 'Wayfair Inc. Class A Common Stock',
    'last': 119.15,
    'change': 6.35,
    'changePct': 5.629
  },
  {
    'symbol': 'WAB',
    'name': 'Westinghouse Air Brake Technologies Corporation Common Stock',
    'last': 93.64,
    'change': 4,
    'changePct': 4.462
  },
  {
    'symbol': 'WAT',
    'name': 'Waters Corporation Common Stock',
    'last': 327.04,
    'change': 9.7,
    'changePct': 3.057
  },
  {
    'symbol': 'WBS',
    'name': 'Webster Financial Corporation Common Stock',
    'last': 59.14,
    'change': 1.56,
    'changePct': 2.709
  },
  {
    'symbol': 'WCN',
    'name': 'Waste Connections Inc. Common Shares',
    'last': 135.63,
    'change': -0.3,
    'changePct': -0.221
  },
  {
    'symbol': 'WEC',
    'name': 'WEC Energy Group Inc. Common Stock',
    'last': 94.6,
    'change': 0.01,
    'changePct': 0.011
  },
  {
    'symbol': 'WELL',
    'name': 'Welltower Inc. Common Stock',
    'last': 90.71,
    'change': 0.51,
    'changePct': 0.565
  },
  {
    'symbol': 'WFC',
    'name': 'Wells Fargo & Company Common Stock',
    'last': 51.6,
    'change': 1.49,
    'changePct': 2.973
  },
  {
    'symbol': 'WFG',
    'name': 'West Fraser Timber Co. Ltd Common stock',
    'last': 94.84,
    'change': 0.75,
    'changePct': 0.797
  },
  {
    'symbol': 'WHR',
    'name': 'Whirlpool Corporation Common Stock',
    'last': 193.58,
    'change': 3.49,
    'changePct': 1.836
  },
  {
    'symbol': 'WIT',
    'name': 'Wipro Limited Common Stock',
    'last': 7.95,
    'change': 0.28,
    'changePct': 3.651
  },
  {
    'symbol': 'WLK',
    'name': 'Westlake Corporation Common Stock',
    'last': 118.21,
    'change': 2.52,
    'changePct': 2.178
  },
  {
    'symbol': 'WM',
    'name': 'Waste Management Inc. Common Stock',
    'last': 154.5,
    'change': -0.67,
    'changePct': -0.432
  },
  {
    'symbol': 'WMB',
    'name': 'Williams Companies Inc. (The) Common Stock',
    'last': 31.26,
    'change': 0.22,
    'changePct': 0.709
  },
  {
    'symbol': 'WOLF',
    'name': 'Wolfspeed Inc. Common Stock',
    'last': 99.25,
    'change': 7.71,
    'changePct': 8.423
  },
  {
    'symbol': 'WPC',
    'name': 'W. P. Carey Inc. REIT',
    'last': 79.35,
    'change': -0.37,
    'changePct': -0.464
  },
  {
    'symbol': 'WPM',
    'name': 'Wheaton Precious Metals Corp Common Shares (Canada)',
    'last': 47.18,
    'change': 0.26,
    'changePct': 0.554
  },
  {
    'symbol': 'WPP',
    'name': 'WPP plc American Depositary Shares',
    'last': 69.37,
    'change': 3.49,
    'changePct': 5.298
  },
  {
    'symbol': 'WRB',
    'name': 'W.R. Berkley Corporation Common Stock',
    'last': 94.04,
    'change': -0.96,
    'changePct': -1.011
  },
  {
    'symbol': 'WRK',
    'name': 'Westrock Company Common Stock',
    'last': 47.34,
    'change': 1.3,
    'changePct': 2.824
  },
  {
    'symbol': 'WSM',
    'name': 'Williams-Sonoma Inc. Common Stock (DE)',
    'last': 152.45,
    'change': 3.94,
    'changePct': 2.653
  },
  {
    'symbol': 'WSO',
    'name': 'Watsco Inc. Common Stock',
    'last': 293.85,
    'change': 0.66,
    'changePct': 0.225
  },
  {
    'symbol': 'WST',
    'name': 'West Pharmaceutical Services Inc. Common Stock',
    'last': 396.76,
    'change': 11.33,
    'changePct': 2.94
  },
  {
    'symbol': 'WTRG',
    'name': 'Essential Utilities Inc. Common Stock',
    'last': 47.31,
    'change': -0.23,
    'changePct': -0.484
  },
  {
    'symbol': 'WY',
    'name': 'Weyerhaeuser Company Common Stock',
    'last': 39.27,
    'change': -0.2,
    'changePct': -0.507
  },
  {
    'symbol': 'XPEV',
    'name': 'XPeng Inc. American depositary shares each representing two Class A ordinary shares',
    'last': 27.53,
    'change': 6.28,
    'changePct': 29.553
  },
  {
    'symbol': 'XYL',
    'name': 'Xylem Inc. Common Stock New',
    'last': 87.1,
    'change': 1.59,
    'changePct': 1.859
  },
  {
    'symbol': 'YUM',
    'name': 'Yum! Brands Inc.',
    'last': 119.55,
    'change': 4.9,
    'changePct': 4.274
  },
  {
    'symbol': 'YUMC',
    'name': 'Yum China Holdings Inc. Common Stock',
    'last': 43.32,
    'change': 3.75,
    'changePct': 9.477
  },
  {
    'symbol': 'ZBH',
    'name': 'Zimmer Biomet Holdings Inc. Common Stock',
    'last': 121.99,
    'change': 2.79,
    'changePct': 2.341
  },
  {
    'symbol': 'ZEN',
    'name': 'Zendesk Inc. Common Stock',
    'last': 112.82,
    'change': 1.62,
    'changePct': 1.457
  },
  {
    'symbol': 'ZIM',
    'name': 'ZIM Integrated Shipping Services Ltd. Ordinary Shares',
    'last': 88.62,
    'change': 3.38,
    'changePct': 3.965
  },
  {
    'symbol': 'ZNH',
    'name': 'China Southern Airlines Company Limited Common Stock',
    'last': 30,
    'change': 3.77,
    'changePct': 14.373
  },
  {
    'symbol': 'ZTO',
    'name': 'ZTO Express (Cayman) Inc. American Depositary Shares each representing one Class A ordinary share.',
    'last': 26.19,
    'change': 4.32,
    'changePct': 19.753
  },
  {
    'symbol': 'ZTS',
    'name': 'Zoetis Inc. Class A Common Stock',
    'last': 191.92,
    'change': 2.81,
    'changePct': 1.486
  }
];

const SymbolsMap: Record<string, Symbol> = SymbolData.reduce((acc, entry) => {
  return {
    ...acc,
    [entry.symbol]: {
      ...entry,
      last: Number(entry.last)
    }
  };
}, {});

const percentageChange = (oldVal: number, newVal: number) => {
  return ((newVal - oldVal) / newVal) * 100;
};

const getRandomSymbol = (set: Set<string>) => {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
};

let intervalHandle: number = -1;

export const createStreamingClient = (onChange: (data: Symbol[]) => void, conflationInMs = 500): StreamingClient => {
  const subscribedSymbols = new Set<string>();

  clearInterval(intervalHandle);
  intervalHandle = window.setInterval(() => {
    const randomCount = Math.round(subscribedSymbols.size * Math.random());

    if (!randomCount) return;


    const updates: Symbol[] = [];


    const availableSymbols = new Set(subscribedSymbols);
    for (let i = 0; i < randomCount; i++) {
      const symbol = getRandomSymbol(subscribedSymbols);
      availableSymbols.delete(symbol);

      const symbolEntry = SymbolsMap[symbol];
      const change = Math.round((Math.random() - 0.5) * 100) / 100;
      const last = Math.round((symbolEntry.last + change) * 100) / 100;
      const changePct = percentageChange(symbolEntry.last, last);
      const symbolValues: Symbol = {
        symbol,
        last,
        change,
        changePct
      };

      updates.push(symbolValues);

      SymbolsMap[symbol] = {
        ...symbolEntry,
        ...symbolValues
      };
    }

    onChange(updates);
  }, conflationInMs);

  const subscribe = (symbols: string[]) => {
    console.info('Subscribing to symbols', symbols);
    symbols.forEach(s => subscribedSymbols.add(s));
    onChange(symbols.map(symbol => SymbolsMap[symbol]));
  };

  const unsubscribe = (symbols: string[]) => {
    console.info('Unsubscribing to symbols', symbols);
    symbols.forEach(s => subscribedSymbols.delete(s));
  };

  return {
    subscribe,
    unsubscribe
  };
};
