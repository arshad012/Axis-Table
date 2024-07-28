
const device_axis_info = [
    {
        device: 'iPhone SE',
        type: 'apple',
        X_axix: 375,
        Y_axis: 667
    },
    {
        device: 'iPhone Xr',
        type: 'apple',
        X_axix: 414,
        Y_axis: 896
    },
    {
        device: 'iPhone 12 Pro',
        type: 'apple',
        X_axix: 390,
        Y_axis: 844
    },
    {
        device: 'iPhone 14 Pro Max',
        type: 'apple',
        X_axix: 430,
        Y_axis: 932
    },
    {
        device: 'Pixel 7',
        type: 'google',
        X_axix: 412,
        Y_axis: 915
    },
    {
        device: 'Samsung galaxy S8+',
        type: 'android',
        X_axix: 360,
        Y_axis: 740
    },
    {
        device: 'Samsung galaxy S20 ultra',
        type: 'android',
        X_axix: 412,
        Y_axis: 915
    },
    {
        device: 'iPad Mini',
        type: 'tablet',
        X_axix: 768,
        Y_axis: 1024
    },
    {
        device: 'iPad Air',
        type: 'tablet',
        X_axix: 820,
        Y_axis: 1180
    },
    {
        device: 'iPad pro',
        type: 'tablet',
        X_axix: 1024,
        Y_axis: 1366
    },
    {
        device: 'Surface Pro 7',
        type: 'laptop',
        X_axix: 912,
        Y_axis: 1368
    },
    {
        device: 'Surface Duo',
        type: 'laptop',
        X_axix: 540,
        Y_axis: 720
    },
    {
        device: 'Asus Zenbook Fold',
        type: 'laptop',
        X_axix: 853,
        Y_axis: 1280
    },
    {
        device: 'Samsung Galaxy A51/71',
        type: 'android',
        X_axix: 412,
        Y_axis: 914
    },
    {
        device: 'Nest Hub',
        type: 'tablet',
        X_axix: 1024,
        Y_axis: 600
    },
    {
        device: 'Nest Hub Max',
        type: 'tablet',
        X_axix: 1280,
        Y_axis: 800
    },
    {
        device: 'Facebook Android',
        type: 'android',
        X_axix: 412,
        Y_axis: 892
    },
];


const display_device_type = document.getElementById('display-device-type');
display_device_type.innerText = 'All Devices';

const tbody = document.getElementById('tbody');

function append(data) {
    tbody.innerHTML = null;

    data.forEach(({device, X_axix, Y_axis}, i) => {
        const tr = document.createElement('tr');

        const td0 = document.createElement('td');
        td0.innerText = i+1;
    
        const td1 = document.createElement('td');
        td1.innerText = device;

        const td2 = document.createElement('td');
        td2.innerText = X_axix;

        const td3 = document.createElement('td');
        td3.innerText = Y_axis;

        tr.append(td0, td1, td2, td3);

        tbody.append(tr);
    });
}

window.onload = () => {
    append(device_axis_info);
}

/*

laptops
apple
android
tablet
google
 */

document.getElementById('sort').onchange = (e) => {
    
    switch(e.target.value) {
        case 'normal' :
            display_device_type.innerText = 'All Devices';
            const original_data = device_axis_info;
            append(original_data);
            break;
        case 'ascending' :
            display_device_type.innerText = 'All Devices low to High';
            const asc_sorted_data = device_axis_info.toSorted((a,b) => {
                return a.X_axix - b.X_axix;
            });
            append(asc_sorted_data);
            break;
        case 'descending' :
            display_device_type.innerText = 'All Devices High to low';
            const dsc_sorted_data = device_axis_info.toSorted((a,b) => {
                return b.X_axix - a.X_axix;
            });
            append(dsc_sorted_data);
            break;
        case 'laptop' :
            display_device_type.innerText = 'Laptops';
            const laptops_data = device_axis_info.filter(({type}) => type == 'laptop')
            append(laptops_data);
            break;
        case 'apple' : 
            display_device_type.innerText = 'Apple';
            const apple_data = device_axis_info.filter(({type}) => type === 'apple');
            append(apple_data);
            break;
        case 'android' :
            display_device_type.innerText = 'Android';
            const android_data = device_axis_info.filter(({type}) => type === 'android')
            append(android_data);
            break;
        case 'tablet' : 
            display_device_type.innerText = 'Tablet';
            const tanlet_data = device_axis_info.filter(({type}) => type === 'tablet');
            append(tanlet_data);
            break;
        case 'google' :
            display_device_type.innerText = 'Google Phone';
            const google_data = device_axis_info.filter(({type}) => type === 'google');
            append(google_data);
            break;
    }
}
