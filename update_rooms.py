import sys

with open('components/RoomsPage.tsx', 'r') as f:
    lines = f.readlines()

updates = {
    'es': {
        1:  {'price': 'Desde $160.000', 'period': 'por persona por noche', 'features': "['1 cama doble', 'Baño interior']"},
        2:  {'price': 'Desde $115.000', 'period': 'por persona por noche', 'features': "['1 cama doble', '1 cama sencilla', 'Baño privado exterior']"},
        3:  {'price': 'Desde $110.000', 'period': 'por persona por noche', 'features': "['1 cama doble', '1 camarote', 'Baño exterior compartido']"},
        4:  {'price': 'Desde $140.000', 'period': 'por persona por noche', 'features': "['1 cama doble', 'Baño interior']"},
        5:  {'price': 'Desde $110.000', 'period': 'por persona por noche', 'features': "['1 cama doble', '1 camarote', 'Baño interior']"},
        6:  {'price': 'Desde $130.000', 'period': 'por persona por noche', 'features': "['1 cama doble', 'Baño privado exterior']"},
        7:  {'price': 'Desde $140.000', 'period': 'por persona por noche', 'features': "['1 cama doble', 'Baño interior']"},
        8:  {'price': 'Desde $150.000', 'period': 'por persona por noche', 'features': "['1 cama Queen', '1 cama doble', 'Baño interior']"},
        9:  {'price': 'Desde $160.000', 'period': 'por persona por noche', 'features': "['1 cama doble', 'Baño interior']"},
        10: {'price': 'Desde $95.000',  'period': 'por persona por noche', 'features': "['2 camarotes (1 doble + 1 sencilla arriba c/u)', 'Baño interior']"},
        11: {'price': 'Desde $120.000', 'period': 'por persona por noche', 'features': "['1 camarote (1 doble + 1 sencilla arriba)', 'Baño exterior compartido']"},
        12: {'price': 'Desde $125.000', 'period': 'por persona por noche', 'features': "['1 cama doble', '1 camarote', 'Baño interior']"},
        13: {'price': 'Desde $90.000',  'period': 'por persona por noche', 'features': "['2 camarotes (cama sencilla)', 'Baño exterior']"},
    },
    'en': {
        1:  {'price': 'From $160,000', 'period': 'per person per night', 'features': "['1 double bed', 'Indoor bathroom']"},
        2:  {'price': 'From $115,000', 'period': 'per person per night', 'features': "['1 double bed', '1 single bed', 'Private outdoor bathroom']"},
        3:  {'price': 'From $110,000', 'period': 'per person per night', 'features': "['1 double bed', '1 bunk bed', 'Shared outdoor bathroom']"},
        4:  {'price': 'From $140,000', 'period': 'per person per night', 'features': "['1 double bed', 'Indoor bathroom']"},
        5:  {'price': 'From $110,000', 'period': 'per person per night', 'features': "['1 double bed', '1 bunk bed', 'Indoor bathroom']"},
        6:  {'price': 'From $130,000', 'period': 'per person per night', 'features': "['1 double bed', 'Private outdoor bathroom']"},
        7:  {'price': 'From $140,000', 'period': 'per person per night', 'features': "['1 double bed', 'Indoor bathroom']"},
        8:  {'price': 'From $150,000', 'period': 'per person per night', 'features': "['1 Queen bed', '1 double bed', 'Indoor bathroom']"},
        9:  {'price': 'From $160,000', 'period': 'per person per night', 'features': "['1 double bed', 'Indoor bathroom']"},
        10: {'price': 'From $95,000',  'period': 'per person per night', 'features': "['2 bunk beds (1 double + 1 single on top each)', 'Indoor bathroom']"},
        11: {'price': 'From $120,000', 'period': 'per person per night', 'features': "['1 bunk bed (1 double + 1 single on top)', 'Shared outdoor bathroom']"},
        12: {'price': 'From $125,000', 'period': 'per person per night', 'features': "['1 double bed', '1 bunk bed', 'Indoor bathroom']"},
        13: {'price': 'From $90,000',  'period': 'per person per night', 'features': "['2 bunk beds (single)', 'Outdoor bathroom']"},
    },
    'fr': {
        1:  {'price': 'À partir de 160 000', 'period': 'par personne par nuit', 'features': "['1 lit double', 'Salle de bain intérieure']"},
        2:  {'price': 'À partir de 115 000', 'period': 'par personne par nuit', 'features': "['1 lit double', '1 lit simple', 'Salle de bain privée extérieure']"},
        3:  {'price': 'À partir de 110 000', 'period': 'par personne par nuit', 'features': "['1 lit double', '1 lit superposé', 'Salle de bain extérieure partagée']"},
        4:  {'price': 'À partir de 140 000', 'period': 'par personne par nuit', 'features': "['1 lit double', 'Salle de bain intérieure']"},
        5:  {'price': 'À partir de 110 000', 'period': 'par personne par nuit', 'features': "['1 lit double', '1 lit superposé', 'Salle de bain intérieure']"},
        6:  {'price': 'À partir de 130 000', 'period': 'par personne par nuit', 'features': "['1 lit double', 'Salle de bain privée extérieure']"},
        7:  {'price': 'À partir de 140 000', 'period': 'par personne par nuit', 'features': "['1 lit double', 'Salle de bain intérieure']"},
        8:  {'price': 'À partir de 150 000', 'period': 'par personne par nuit', 'features': "['1 lit Queen', '1 lit double', 'Salle de bain intérieure']"},
        9:  {'price': 'À partir de 160 000', 'period': 'par personne par nuit', 'features': "['1 lit double', 'Salle de bain intérieure']"},
        10: {'price': 'À partir de 95 000',  'period': 'par personne par nuit', 'features': "['2 lits superposés (1 double + 1 simple en haut chacun)', 'Salle de bain intérieure']"},
        11: {'price': 'À partir de 120 000', 'period': 'par personne par nuit', 'features': "['1 lit superposé (1 double + 1 simple en haut)', 'Salle de bain extérieure partagée']"},
        12: {'price': 'À partir de 125 000', 'period': 'par personne par nuit', 'features': "['1 lit double', '1 lit superposé', 'Salle de bain intérieure']"},
        13: {'price': 'À partir de 90 000',  'period': 'par personne par nuit', 'features': "['2 lits superposés (simple)', 'Salle de bain extérieure']"},
    }
}

locale = None
in_rooms = False
room_depth = 0
current_id = None
result = []

for line in lines:
    stripped = line.strip()
    
    if stripped == 'es:':
        locale = 'es'
    elif stripped == 'en:':
        locale = 'en'
    elif stripped == 'fr:':
        locale = 'fr'
    
    if stripped == 'rooms: [':
        in_rooms = True
        room_depth = 0
        current_id = None
    
    if in_rooms:
        room_depth += line.count('{')
        room_depth -= line.count('}')
        
        if stripped.startswith('id: '):
            current_id = int(stripped[4:].rstrip(','))
        
        if room_depth >= 1 and current_id is not None and locale in updates and current_id in updates[locale]:
            u = updates[locale][current_id]
            indent = line[:len(line) - len(line.lstrip())]
            if stripped.startswith('price: '):
                line = f"{indent}price: '{u['price']}','\n"
            elif stripped.startswith('period: '):
                line = f"{indent}period: '{u['period']}','\n"
            elif stripped.startswith('features: '):
                line = f"{indent}features: {u['features']},'\n"
        
        if room_depth == 0 and stripped == '],':
            in_rooms = False
            current_id = None
    
    result.append(line)

with open('components/RoomsPage.tsx', 'w') as f:
    f.writelines(result)

print('Done')
