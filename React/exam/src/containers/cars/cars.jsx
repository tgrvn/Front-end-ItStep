import { useContext } from 'react';
import { Card } from '../../components/carCard/carCard';
import { SearchContext } from '../../contexts/searchContext';
import { Pages } from '../../ui/pages/pages';

export function CarsContainer() {
    const { searchResult } = useContext(SearchContext);

    return <>
        <div className='card-container animate__animated animate__fadeIn'>
            {searchResult && searchResult.map((item) => <Card key={item.userId} item={item} />)}
        </div>
        {searchResult && <Pages />}
    </>
}

// EUR: 4222
// UAH: 149952
// USD: 4499
// VIN: "SB1BR56Lх0Eхххх39"
// addDate: "2022-05-03 10:38:06"
// auctionPossible: false
// autoData: {active: false, vat: false, description: '', version: '', onModeration: false, …}
// autoInfoBar: {custom: false, abroad: false, onRepairParts: false, damage: false, underCredit: false, …}
// badges: []
// canSetSpecificPhoneToAdvert: false
// checkedVin: {orderId: 0, vin: 'SB1BR56Lх0Eхххх39', isShow: false}
// chipsCount: 0
// cityLocative: "Виннице"
// color: {name: 'Черный', eng: 'black', hex: '#000000'}
// dealer: {link: '', logo: '', type: '', id: 0, name: '', …}
// dontComment: 1
// exchangePossible: false
// exchangeType: "Любой"
// exchangeTypeId: 0
// expireDate: "2022-06-03 10:38:06"
// firstTime: true
// hasWebP: 2
// haveInfotechReport: false
// infoBarText: ""
// isAutoAddedByPartner: false
// isLeasing: 0
// levelData: {level: 37, callsLevel: 0, label: 0, period: 2, hotType: '', …}
// linkToView: "/auto_toyota_avensis_32470512.html"
// locationCityName: "Винница"
// markId: 79
// markName: "Toyota"
// markNameEng: "toyota"
// modelId: 696
// modelName: "Avensis"
// modelNameEng: "avensis"
// moderatedAbroad: false
// oldTop: {isActive: false, expireDate: ''}
// optionStyles: []
// partnerId: 0
// photoData: {all: Array(27), count: 27, seoLinkM: 'https://cdn1.riastatic.com/photosnew/auto/photo/toyota_avensis__446571791m.jpg', seoLinkSX: 'https://cdn1.riastatic.com/photosnew/auto/photo/toyota_avensis__446571791sx.jpg', seoLinkB: 'https://cdn1.riastatic.com/photosnew/auto/photo/toyota_avensis__446571791b.jpg', …}
// plateNumber: "AB 8055 CB"
// plateNumberData: {text: 'AB 8055 CB'}
// realtyExchange: false
// secureKey: "bfcca990b55a32e8c3c29cd47914bc16"
// sendComments: 0
// soldDate: "2022-05-03 12:44:22"
// stateData: {name: 'Винница', regionName: 'Винницкая', regionNameEng: 'vinnica', linkToCatalog: '/city/vinnica/', title: 'Поиск объявлений по городу Винница', …}
// subCategoryName: "Седан"
// technicalChecked: false
// title: "Toyota Avensis"
// updateDate: "2022-05-03 10:38:06"
// userBlocked: []
// userHideADSStatus: false
// userId: 11186587
// userPhoneData: {phoneId: 'xxxxxxxxx', phone: '(xxx) xxx xx xx'}
// videoMessageID: ""
// withInfoBar: false