/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Dimensions,
    ScrollView,
    StatusBar,
    TouchableHighlight
} from 'react-native'

import Swiper from 'react-native-swiper'


import  FooterTab from '../compoments/FooterTab'

const { width } = Dimensions.get('window')

export default class UserInfo extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        header:null,
    })
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
        };
    }
    resetUserId(uid) {
        this.setState({
            userId:uid
        });
    }
    render() {
        const renderPagination = (index, total, context) => {
            return (
                <View style={styles.paginationStyle}>
                    <Text style={{ color: 'grey' }}>
                        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
                    </Text>
                </View>
            )
        }
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle="dark-content"
                />
            <ScrollView>
            <View style={{width:'100%',height:400}}>
                <Swiper
                    style={styles.wrapper}
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
                    paginationStyle={{
                        bottom: 100
                    }}
                    loop={true}
                >
                    <View style={styles.slide}>
                        <Image style={styles.image}
                            source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/207.jpg'}}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image}
                               source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/210.jpg'}}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image}
                               source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/212.jpg'}}
                        />
                    </View>
                </Swiper>

                <View style={styles.backButton}>
                    <TouchableHighlight
                        onPress={()=>{
                        this.props.navigation.goBack()
                        }}
                        underlayColor='rgba(0,0,0,0)'
                    >
                        <Image
                            source={require('../images/back.png')}
                            style={styles.backButtonIcon}
                        />
                    </TouchableHighlight>
                </View>
                    <View style={styles.userInfoBase}>
                        <View style={styles.userInfoBaseLeft}>
                            <Image style={styles.headImage}
                                   source={{uri:'http://pic2.58.com/jiaoyou/yyw_img/212.jpg'}}
                            />
                        </View>
                        <View style={styles.userInfoBaseCenter}>
                            <Text style={styles.userInfoName}>欢欢乐乐过新年</Text>
                            <View  style={styles.userInfoAddAndAge} >
                                <Text style={styles.userInfoAdd}>苏州</Text>
                                <Text style={styles.userInfoAge}>28岁</Text>
                            </View>
                        </View>
                        <TouchableHighlight onPress={()=>{
                        }}  underlayColor='rgba(0,0,0,0)'>
                            <View style={styles.userInfoBaseRight} >
                                <Image
                                    source={require('../images/online.png')}
                                    style={styles.onlineIcon}
                                />
                                <Text>查看是否在线</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.userInfoHeartMsg}>
                    <View style={styles.userInfoHeartMsgTitle}>
                        <Image
                            source={require('../images/heart.png')}
                            style={styles.heartMsgIcon}
                        />
                        <Text style={styles.userInfoHeartMsgTitleText}>内心独白</Text>
                    </View>
                    <View>
                        <Text  style={styles.userInfoHeartMsgContent}>
                            我是一个容易受伤的女人，需要你来安慰一下我~~哈哈哈哈我是一个容易受伤的女人，需要你来安慰一下我~~哈哈哈哈我是一个容易受伤的女人，需要你来安慰一下我~~哈哈哈哈我是一个容易受伤的女人，需要你来安慰一下我~~哈哈哈哈
                        </Text>
                    </View>
                </View>
                <View style={styles.userInfoData}>
                    <View style={styles.userInfoDataTitle}>
                        <Image
                            source={require('../images/data.png')}
                            style={styles.dataIcon}
                        />
                        <Text style={styles.userInfoDataTitleText}>基本资料</Text>
                    </View>
                    <View style={styles.userInfoDataTagList}>
                        <Text  style={styles.userInfoDataTag1}>
                            160cm
                        </Text>
                        <Text style={styles.userInfoDataTag2} >
                            不粘人
                        </Text>
                        <Text  style={styles.userInfoDataTag3}>
                            技术型
                        </Text>
                        <Text style={styles.userInfoDataTag4} >
                            狮子座
                        </Text>
                        <Text  style={styles.userInfoDataTag1}>
                           本科
                        </Text>
                    </View>
                </View>
                <View style={styles.userInfoData}>
                    <View style={styles.userInfoDataTitle}>
                        <Image
                            source={require('../images/call.png')}
                            style={styles.dataIcon}
                        />
                        <Text style={styles.userInfoDataTitleText}>联系方式</Text>
                    </View>
                    <View style={styles.userInfoDataCallList}>
                        <View  style={styles.userInfoDataCallItem}>
                            <Text style={styles.userInfoDataCallItemTitle}>QQ</Text>
                            <Text style={styles.userInfoDataCallItemContent}>***********</Text>
                        </View>
                        <View style={styles.userInfoDataCallItem} >
                            <Text style={styles.userInfoDataCallItemTitle}>微信</Text>
                            <Text style={styles.userInfoDataCallItemContent}>***********</Text>
                        </View>
                        <View  style={styles.userInfoDataCallItem}>
                            <Text style={styles.userInfoDataCallItemTitle}>手机</Text>
                            <Text style={styles.userInfoDataCallItemContent}>***********</Text>
                        </View>
                        <View style={styles.userInfoDataCallItem} >
                            <Text style={styles.userInfoDataCallItemTitle}>地址</Text>
                            <Text style={styles.userInfoDataCallItemContent}>***********</Text>
                        </View>
                    </View>
                    <TouchableHighlight onPress={()=>{

                    }} underlayColor='rgba(0,0,0,0)' >
                        <View style={styles.userInfoDataCallFindBtn}><Text style={styles.userInfoDataCallFindBtnText}>点击查看（vip会员可见）</Text></View>
                    </TouchableHighlight>
                </View>

                <View style={styles.userInfoData}>
                    <View style={styles.userInfoDataTitle}>
                        <Image
                            source={require('../images/detail.png')}
                            style={styles.dataIcon}
                        />
                        <Text style={styles.userInfoDataTitleText}>详细信息</Text>
                    </View>
                    <View style={styles.userInfoDataDetailList}>
                        <View  style={styles.userInfoDataDetailItem}>
                            <Text style={styles.userInfoDataDetailItemTitle}>血型</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>O型</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>兴趣爱好</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>上网，听音乐</Text>
                        </View>
                        <View  style={styles.userInfoDataDetailItem}>
                            <Text style={styles.userInfoDataDetailItemTitle}>魅力部位</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>脸蛋</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>想要小孩</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>要小孩</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>个性特征</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>可爱</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>是否有房</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>租房</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>是否有车</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>没车</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>婚姻状况</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>未婚</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>喜欢异性的特征</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>外表帅气</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>是否接受异地恋</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>能</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>是否接受婚前性行为</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>能</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>是否愿意婚后与父母同住</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>愿意</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.userInfoData}>
                    <View style={styles.userInfoDataTitle}>
                        <Image
                            source={require('../images/term.png')}

                            style={styles.dataIcon}
                        />
                        <Text style={styles.userInfoDataTitleText}>征友条件</Text>
                    </View>
                    <View style={styles.userInfoDataDetailList}>
                        <View  style={styles.userInfoDataDetailItem}>
                            <Text style={styles.userInfoDataDetailItemTitle}>居住条件</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>不限</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>年龄范围</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>不限-不限</Text>
                        </View>
                        <View  style={styles.userInfoDataDetailItem}>
                            <Text style={styles.userInfoDataDetailItemTitle}>最低学历</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>不限</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>身高</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>不限</Text>
                        </View>
                        <View style={styles.userInfoDataDetailItem} >
                            <Text style={styles.userInfoDataDetailItemTitle}>收入</Text>
                            <Text style={styles.userInfoDataDetailItemContent}>不限</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.userInfoDataButtomBtn}>
                    <Text style={styles.userInfoDataDisabled}>拉黑</Text>
                    <Text style={styles.userInfoDataDisabled}>举报</Text>
                </View>
            </ScrollView>

            <FooterTab userId={this.state.userId} resetUserid={(userid) =>this.resetUserId(userid)} />
            </View>

        );
    }
}

const styles=StyleSheet.create({

    backButton:{
        position:'absolute',
        top:30,
        left:20,
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.3
    },
    headImage:{
        width:60,
        height:60,
        borderRadius:30,
        opacity:1
    },
    userInfoBase:{
        flexDirection:'row',
        position:'absolute',
        top:310,
        width:width-20,
        left:10,
        padding:10,
        height:80  ,
        zIndex:1000,
        backgroundColor:'#fff',
        borderRadius:5,
    },
    userInfoBaseLeft:{
        marginRight:10
    },
    userInfoBaseCenter:{
        flex:1
    },
    userInfoName:{
        fontSize:16,
        marginBottom:10,
    },
    userInfoAdd:{
        backgroundColor:'#00CCFF',
        color:'#fff',
        paddingLeft:5,
        paddingRight:5,
        borderRadius:4
    },
    userInfoAge:{
        backgroundColor:'#FF66CC',
        marginLeft:10,
        color:'#fff',
        paddingLeft:5,
        paddingRight:5,
        borderRadius:4

    },
    userInfoAddAndAge:{
        flexDirection:'row',
    },
    userInfoBaseRight:{
        flexDirection:'row',
        flex:1,
        alignItems:"center",
        justifyContent: 'center',

    },
    onlineIcon:{
        width:20,
        height:20
    },
    slide: {
       height:400,
        backgroundColor: 'red'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        height:400,
        width,
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    },
    backButtonIcon:{
        width:30,
        height:20,
    },
    userInfoHeartMsg:{
        width,
        backgroundColor:'#fff'
    },
    userInfoHeartMsgTitle:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#f9f9f9',
        alignItems:"center",
    },
    heartMsgIcon:{
        width:30,
        height:30,
        margin:10,
    },
    userInfoHeartMsgTitleText:{
        fontSize:16
    },
    userInfoHeartMsgContent:{
        padding:10,
        lineHeight:22,
        color:'#555'
    },
    userInfoData:{
        width,
        backgroundColor:'#fff'
    },
    userInfoDataTitle:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#f9f9f9',
        alignItems:"center",
    },
    dataIcon:{
        width:30,
        height:30,
        margin:10,
    },
    userInfoDataTitleText:{
        fontSize:16
    },
    userInfoDataTagList:{
        flexDirection:'row',
        padding:10,
    },
    userInfoDataTag1:{
        paddingRight:7,paddingLeft:7,backgroundColor:'#31ca09',color:'#fff',marginRight:10
    },
    userInfoDataTag2:{
        paddingRight:7,paddingLeft:7,backgroundColor:'#1296db',color:'#fff',marginRight:10,
    },
    userInfoDataTag3:{
        paddingRight:7,paddingLeft:7,backgroundColor:'#d4237a',color:'#fff',marginRight:10,
    },
    userInfoDataTag4:{
        paddingRight:7,paddingLeft:7,backgroundColor:'#efb336',color:'#fff',marginRight:10,
    },
    userInfoDataCallList:{
        width,

    },
    userInfoDataCallItem:{
        flexDirection:'row',
        alignItems:"center",

    },
    userInfoDataCallItemTitle:{
        flex:0.2,
        padding:7,
        color:'#777',
        paddingLeft:10

    },
    userInfoDataCallItemContent:{
        flex:1,
        color:'#777'
    },
    userInfoDataCallFindBtn:{
        width:"80%",
        height:40,
        backgroundColor:'#1296db',
        marginLeft:'10%',
        marginTop:10,
        marginBottom:10,
        borderRadius:5,
    },
    userInfoDataCallFindBtnText:{
        lineHeight:40,
        width:"100%",
        textAlign:"center",
        color:'#fff'
    },
    userInfoDataDetailList:{
        width,
    },
    userInfoDataDetailItem:{
        flexDirection:'row',
        alignItems:"center",
    },
    userInfoDataDetailItemTitle:{
        flex:1,
        padding:7,
        color:'#777',
        paddingLeft:10
    },
    userInfoDataDetailItemContent:{
        flex:1,
        color:'#777'
    },
    userInfoDataButtomBtn:{
        width:"50%",
        marginLeft:'25%',
        flexDirection:'row',
        alignItems:"center",
        justifyContent: 'center',
        marginTop:20,
        marginBottom:10

    },
    userInfoDataDisabled:{
        flex:1,
        height:30,
        textAlign:'center',
        fontSize:16,
        color:'#777'
    }
})
