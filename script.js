        $(document).ready(function () {
            $.getJSON('data.json', function (data) {
                var tableData = Object.values(data).map((entry, index) => {
                    return {
                        "Number": index + 1,
                        "Revelation Order": entry.revelationOrder,
                        "Name": entry.name,
                        "Number of Ayahs": entry.nAyah,
                        "Type": entry.type
                    };
                });

                var table = $('#quranTable').DataTable({
                    data: tableData,
                    columns: [
                        { data: 'Number' },
                        { data: 'Revelation Order' },
                        { data: 'Name' },
                        { data: 'Number of Ayahs' },
                        { data: 'Type' }
                    ],
                    "pageLength": 15, 
                    "lengthMenu": [10, 15, 25, 57, 114], 
                    "pagingType": "full_numbers" 
                });
            });
        });
