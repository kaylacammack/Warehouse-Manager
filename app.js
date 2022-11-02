const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }]

// STUB Drawing
function loadPackages(){
    drawPackages(packages);
}

function drawPackages(packages){
    let template = '';
    packages.forEach(package => {
        template +=`
        <div class="card col-3">
            <ul>
                <li>Priority Level: ${package.priorityLevel}</li>
                <li>Is Fragile: ${package.isFragile}</li>
                <li>Weight: ${package.weight}</li>
                <li>To: ${package.to}</li>
                <li>Tracking Number: ${package.trackingNumber}</li>
            </ul>
        </div>
        `
      
    });
    document.getElementById('packages').innerHTML=template
}
// STUB Sorting

function applyFilter(filterType) {
    let filteredPackages;

    if (filterType === 'fragile') {
        filteredPackages = packages.filter(package => package.isFragile === true);
    } 
    else if (filterType === 'priority') {
        filteredPackages = packages.filter(package => package.priorityLevel === 'express' );
    }
    else {
        filteredPackages = packages.filter(package => package.weight > 5);
    }

    drawPackages(filteredPackages)
}
