export function search(filters, page = 0) {
    return fetch(`https://developers.ria.com/auto/search?api_key=qWf1bhBHRxpgasa8n3X2IPifTd41WUmqb8ynOtxl&${filters.marks}&${filters.yers}&${filters.engineVol}&${filters.color}&price_ot=${filters.priceOt}&price_do=${filters.priceDo}&page=${page}`)
        .then(data => {
            if (data.ok) {
                return data.json();
            }
            throw new Error('error')
        })
}

export async function getFromIds(result, ids, i) {
    if (!ids?.length || ids?.length < i) { return result; }
    let res = null;
    try {
        if (ids?.length - 1 > i) {
            const res = await fetch('https://developers.ria.com/auto/info?api_key=qWf1bhBHRxpgasa8n3X2IPifTd41WUmqb8ynOtxl&auto_id=' + ids[i])
                .then(data => {
                    if (data.ok) {
                        return data.json();
                    }
                    throw new Error('error')
                })

            return await getFromIds([...result, res], ids, i + 1)
        }
    } catch (error) {
        console.error('not found');
        await getFromIds([...result, res], ids, i + 1);
    }

    return result;
}
