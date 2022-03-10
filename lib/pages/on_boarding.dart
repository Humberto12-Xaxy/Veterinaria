import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:mvp_all/src/styles/colors/colors_view.dart';

class OnBoarding extends StatefulWidget {
  const OnBoarding({Key? key}) : super(key: key);

  @override
  State<OnBoarding> createState() => _OnBoardingState();
}

class _OnBoardingState extends State<OnBoarding> {
  int pages = 0;
  List<Map<String, String>> onBoardingDatas = [
    {
      "text": 'Esparcimiento',
      "text1": 'Brindamos todo los servicios para conservar a tus mascotas ',
      "image": "assets/images/B1.png"
    },
    {
      "text": 'Esparcimiento',
      "text1": 'Brindamos todo los servicios para conservar a tus mascotas ',
      "image": "assets/images/B2.png"
    },
    {
      "text": 'Esparcimiento',
      "text1": 'Brindamos todo los servicios para conservar a tus mascotas ',
      "image": "assets/images/B3.png"
    },
    {
      "text": 'Esparcimiento',
      "text1": 'Brindamos todo los servicios para conservar a tus mascotas ',
      "image": "assets/images/B4.png"
    },
    {
      "text": 'Esparcimiento',
      "text1": 'Brindamos todo los servicios para conservar a tus mascotas ',
      "image": "assets/images/B5.png"
    },
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          color: Colors.white,
          child: SizedBox(
            width: double.infinity,
            child: Column(
              children: <Widget>[
                Expanded(
                  flex: 4,
                  child: PageView.builder(
                    onPageChanged: (value) {
                      setState(() {
                        pages = value;
                      });
                    },
                    itemCount: onBoardingDatas.length,
                    itemBuilder: (context, index) => ContentBoarding(
                        text: onBoardingDatas[index]["text"]!,
                        text1: onBoardingDatas[index]["text1"]!,
                        image: onBoardingDatas[index]["image"]!),
                  ),
                ),
                Expanded(
                  flex: 2,
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: List.generate(
                          onBoardingDatas.length,
                          (index) => newMethod(index: index),
                        ),
                      )
                      // newMethod(index: index),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  AnimatedContainer newMethod({required int index}) {
    return AnimatedContainer(
      margin: const EdgeInsets.only(right: 8),
      decoration: BoxDecoration(
        color: pages == index
            ? ColorsSelect.paginatorNext
            : ColorsSelect.paginator,
        borderRadius: BorderRadius.circular(3),
      ),
      height: 4,
      width: pages == index ? 20 : 12,
      duration: kThemeAnimationDuration,
    );
  }
}

class ContentBoarding extends StatelessWidget {
  const ContentBoarding({
    Key? key,
    required this.text,
    required this.text1,
    required this.image,
  }) : super(key: key);
  final String text, text1, image;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Image.asset(
          image,
          width: 290,
          height: 200,
        ),
        Text(
          text,
          style: const TextStyle(
            color: ColorsSelect.txtBoHe,
            fontSize: 25,
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(20.0),
          child: Text(
            text1,
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: ColorsSelect.txtBoSubHe,
              fontSize: 16,
            ),
          ),
        )
      ],
    );
  }
}
