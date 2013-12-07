var wp_map_census_2008_communes = 	sequelize.define('wp_map_census_2008_communes', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    CODE: Sequelize.STRING,
    NAME: Sequelize.STRING,
    TOTPOP : Sequelize.FLOAT,
    MALES : Sequelize.FLOAT,
    FEMALES : Sequelize.FLOAT,
    DENSITY : Sequelize.FLOAT,
    SEXRATIO : Sequelize.FLOAT,
    T_LIT15 : Sequelize.FLOAT,
    M_LIT15 : Sequelize.FLOAT,
    F_LIT15 : Sequelize.FLOAT,
    DEPENDENCY : Sequelize.FLOAT,
    POP1564 : Sequelize.FLOAT,
    MAL1564 : Sequelize.FLOAT,
    FEM1564 : Sequelize.FLOAT,
    FEM1549 : Sequelize.FLOAT,
    TOTHH : Sequelize.FLOAT,
    AVG_HS : Sequelize.FLOAT,
    FHEADS : Sequelize.FLOAT,
    CW_RATIO: Sequelize.FLOAT,
    D_OWN : Sequelize.FLOAT,
	D_RENT : Sequelize.FLOAT,
    D_FREE : Sequelize.FLOAT,
    D_OTH : Sequelize.FLOAT,
    T_ACTIVE : Sequelize.FLOAT,
    M_ACTIVE : Sequelize.FLOAT,
    F_ACTIVE : Sequelize.FLOAT,
    T_PRIMSEC : Sequelize.FLOAT,
    T_SECSEC: Sequelize.FLOAT,
    T_TERSEC : Sequelize.FLOAT,
	M_PRIMSEC : Sequelize.FLOAT,
    M_SECSEC : Sequelize.FLOAT,
    M_TERSEC : Sequelize.FLOAT,
    F_PRIMSEC : Sequelize.FLOAT,
    F_SECSEC : Sequelize.FLOAT,
    F_TERSEC : Sequelize.FLOAT,
    T_ATTEND : Sequelize.FLOAT,
    M_ATTEND: Sequelize.FLOAT,
    F_ATTEND : Sequelize.FLOAT,
	T_NOEDUC : Sequelize.FLOAT,
    M_NOEDUC: Sequelize.FLOAT,
    F_NOEDUC : Sequelize.FLOAT,
	M_SEE : Sequelize.FLOAT,
    M_SPEAK : Sequelize.FLOAT,
    M_HEAR : Sequelize.FLOAT,
    M_MOVE : Sequelize.FLOAT,
    M_MENTAL : Sequelize.FLOAT,
    F_SEE : Sequelize.FLOAT,
    F_SPEAK : Sequelize.FLOAT,
    F_HEAR: Sequelize.FLOAT,
    F_MOVE : Sequelize.FLOAT,
	F_MENTAL : Sequelize.FLOAT,
    T_UER : Sequelize.FLOAT,
    M_UER : Sequelize.FLOAT,
    F_UER : Sequelize.FLOAT,
    YEAR : Sequelize.FLOAT,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_2008_districts = 	sequelize.define('wp_map_census_2008_districts', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    CODE: Sequelize.STRING,
    NAME: Sequelize.STRING,
    TOTPOP : Sequelize.FLOAT,
    MALES : Sequelize.FLOAT,
    FEMALES : Sequelize.FLOAT,
    DENSITY : Sequelize.FLOAT,
    SEXRATIO : Sequelize.FLOAT,
    T_LIT15 : Sequelize.FLOAT,
    M_LIT15 : Sequelize.FLOAT,
    F_LIT15 : Sequelize.FLOAT,
    DEPENDENCY : Sequelize.FLOAT,
    POP1564 : Sequelize.FLOAT,
    MAL1564 : Sequelize.FLOAT,
    FEM1564 : Sequelize.FLOAT,
    FEM1549 : Sequelize.FLOAT,
    TOTHH : Sequelize.FLOAT,
    AVG_HS : Sequelize.FLOAT,
    FHEADS : Sequelize.FLOAT,
    CW_RATIO: Sequelize.FLOAT,
    D_OWN : Sequelize.FLOAT,
	D_RENT : Sequelize.FLOAT,
    D_FREE : Sequelize.FLOAT,
    D_OTH : Sequelize.FLOAT,
    T_ACTIVE : Sequelize.FLOAT,
    M_ACTIVE : Sequelize.FLOAT,
    F_ACTIVE : Sequelize.FLOAT,
    T_PRIMSEC : Sequelize.FLOAT,
    T_SECSEC: Sequelize.FLOAT,
    T_TERSEC : Sequelize.FLOAT,
	M_PRIMSEC : Sequelize.FLOAT,
    M_SECSEC : Sequelize.FLOAT,
    M_TERSEC : Sequelize.FLOAT,
    F_PRIMSEC : Sequelize.FLOAT,
    F_SECSEC : Sequelize.FLOAT,
    F_TERSEC : Sequelize.FLOAT,
    T_ATTEND : Sequelize.FLOAT,
    M_ATTEND: Sequelize.FLOAT,
    F_ATTEND : Sequelize.FLOAT,
	T_NOEDUC : Sequelize.FLOAT,
    M_NOEDUC: Sequelize.FLOAT,
    F_NOEDUC : Sequelize.FLOAT,
	M_SEE : Sequelize.FLOAT,
    M_SPEAK : Sequelize.FLOAT,
    M_HEAR : Sequelize.FLOAT,
    M_MOVE : Sequelize.FLOAT,
    M_MENTAL : Sequelize.FLOAT,
    F_SEE : Sequelize.FLOAT,
    F_SPEAK : Sequelize.FLOAT,
    F_HEAR: Sequelize.FLOAT,
    F_MOVE : Sequelize.FLOAT,
	F_MENTAL : Sequelize.FLOAT,
    T_UER : Sequelize.FLOAT,
    M_UER : Sequelize.FLOAT,
    F_UER : Sequelize.FLOAT,
    YEAR : Sequelize.FLOAT,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})


var wp_map_census_2008_provinces = 	sequelize.define('wp_map_census_2008_provinces', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    CODE: Sequelize.STRING,
    NAME: Sequelize.STRING,
    TOTPOP : Sequelize.FLOAT,
    MALES : Sequelize.FLOAT,
    FEMALES : Sequelize.FLOAT,
    DENSITY : Sequelize.FLOAT,
    SEXRATIO : Sequelize.FLOAT,
    T_LIT15 : Sequelize.FLOAT,
    M_LIT15 : Sequelize.FLOAT,
    F_LIT15 : Sequelize.FLOAT,
    DEPENDENCY : Sequelize.FLOAT,
    POP1564 : Sequelize.FLOAT,
    MAL1564 : Sequelize.FLOAT,
    FEM1564 : Sequelize.FLOAT,
    FEM1549 : Sequelize.FLOAT,
    TOTHH : Sequelize.FLOAT,
    AVG_HS : Sequelize.FLOAT,
    FHEADS : Sequelize.FLOAT,
    CW_RATIO: Sequelize.FLOAT,
    D_OWN : Sequelize.FLOAT,
	D_RENT : Sequelize.FLOAT,
    D_FREE : Sequelize.FLOAT,
    D_OTH : Sequelize.FLOAT,
    T_ACTIVE : Sequelize.FLOAT,
    M_ACTIVE : Sequelize.FLOAT,
    F_ACTIVE : Sequelize.FLOAT,
    T_PRIMSEC : Sequelize.FLOAT,
    T_SECSEC: Sequelize.FLOAT,
    T_TERSEC : Sequelize.FLOAT,
	M_PRIMSEC : Sequelize.FLOAT,
    M_SECSEC : Sequelize.FLOAT,
    M_TERSEC : Sequelize.FLOAT,
    F_PRIMSEC : Sequelize.FLOAT,
    F_SECSEC : Sequelize.FLOAT,
    F_TERSEC : Sequelize.FLOAT,
    T_ATTEND : Sequelize.FLOAT,
    M_ATTEND: Sequelize.FLOAT,
    F_ATTEND : Sequelize.FLOAT,
	T_NOEDUC : Sequelize.FLOAT,
    M_NOEDUC: Sequelize.FLOAT,
    F_NOEDUC : Sequelize.FLOAT,
	M_SEE : Sequelize.FLOAT,
    M_SPEAK : Sequelize.FLOAT,
    M_HEAR : Sequelize.FLOAT,
    M_MOVE : Sequelize.FLOAT,
    M_MENTAL : Sequelize.FLOAT,
    F_SEE : Sequelize.FLOAT,
    F_SPEAK : Sequelize.FLOAT,
    F_HEAR: Sequelize.FLOAT,
    F_MOVE : Sequelize.FLOAT,
	F_MENTAL : Sequelize.FLOAT,
    T_UER : Sequelize.FLOAT,
    M_UER : Sequelize.FLOAT,
    F_UER : Sequelize.FLOAT,
    YEAR : Sequelize.FLOAT,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})


var wp_map_census_2008_villages = 	sequelize.define('wp_map_census_2008_villages', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    CODE: Sequelize.STRING,
    NAME: Sequelize.STRING,
    TOTPOP : Sequelize.FLOAT,
    MALES : Sequelize.FLOAT,
    FEMALES : Sequelize.FLOAT,
    DENSITY : Sequelize.FLOAT,
    SEXRATIO : Sequelize.FLOAT,
    T_LIT15 : Sequelize.FLOAT,
    M_LIT15 : Sequelize.FLOAT,
    F_LIT15 : Sequelize.FLOAT,
    DEPENDENCY : Sequelize.FLOAT,
    POP1564 : Sequelize.FLOAT,
    MAL1564 : Sequelize.FLOAT,
    FEM1564 : Sequelize.FLOAT,
    FEM1549 : Sequelize.FLOAT,
    TOTHH : Sequelize.FLOAT,
    AVG_HS : Sequelize.FLOAT,
    FHEADS : Sequelize.FLOAT,
    CW_RATIO: Sequelize.FLOAT,
    D_OWN : Sequelize.FLOAT,
	D_RENT : Sequelize.FLOAT,
    D_FREE : Sequelize.FLOAT,
    D_OTH : Sequelize.FLOAT,
    T_ACTIVE : Sequelize.FLOAT,
    M_ACTIVE : Sequelize.FLOAT,
    F_ACTIVE : Sequelize.FLOAT,
    T_PRIMSEC : Sequelize.FLOAT,
    T_SECSEC: Sequelize.FLOAT,
    T_TERSEC : Sequelize.FLOAT,
	M_PRIMSEC : Sequelize.FLOAT,
    M_SECSEC : Sequelize.FLOAT,
    M_TERSEC : Sequelize.FLOAT,
    F_PRIMSEC : Sequelize.FLOAT,
    F_SECSEC : Sequelize.FLOAT,
    F_TERSEC : Sequelize.FLOAT,
    T_ATTEND : Sequelize.FLOAT,
    M_ATTEND: Sequelize.FLOAT,
    F_ATTEND : Sequelize.FLOAT,
	M_SEE : Sequelize.FLOAT,
    M_SPEAK : Sequelize.FLOAT,
    M_HEAR : Sequelize.FLOAT,
    M_MOVE : Sequelize.FLOAT,
    M_MENTAL : Sequelize.FLOAT,
    F_SEE : Sequelize.FLOAT,
    F_SPEAK : Sequelize.FLOAT,
    F_HEAR: Sequelize.FLOAT,
    F_MOVE : Sequelize.FLOAT,
	F_MENTAL : Sequelize.FLOAT,
    T_UER : Sequelize.FLOAT,
    M_UER : Sequelize.FLOAT,
    F_UER : Sequelize.FLOAT,
    YEAR : Sequelize.FLOAT,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})


var wp_map_census_districts = 	sequelize.define('wp_map_census_districts', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    district_id: Sequelize.STRING,
    district_name: Sequelize.STRING,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_communes = 	sequelize.define('wp_map_census_eco_2011_communes', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_districts = 	sequelize.define('wp_map_census_eco_2011_districts', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_eco_2011_provinces = 	sequelize.define('wp_map_census_eco_2011_provinces', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    code_id: Sequelize.STRING,
    name: Sequelize.STRING,
    establishments_num: Sequelize.INTEGER,
    total_persons_engaged : Sequelize.INTEGER,
	male_persons_engaged: Sequelize.INTEGER,
    female_persons_engaged: Sequelize.INTEGER,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})

var wp_map_census_provinces = 	sequelize.define('wp_map_census_provinces', {
    shape_id: { type: Sequelize.INTEGER, primaryKey: true},
    province_id: Sequelize.STRING,
    province_name: Sequelize.STRING,
    related_docs: Sequelize.STRING,
    last_update : Sequelize.DATE
})