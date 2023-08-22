import 'package:flutter/material.dart';
import 'package:happi_oven/pages/login_page/widgets/text_form_field.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool isLogin = true;
  bool passwordLoginObscure = true;
  TextEditingController usernameLoginField = TextEditingController();
  TextEditingController passwordLoginField = TextEditingController();
  TextEditingController usernameRegisterField = TextEditingController();
  TextEditingController emailRegisterField = TextEditingController();
  TextEditingController phoneRegisterField = TextEditingController();
  TextEditingController passwordRegisterField = TextEditingController();
  TextEditingController passwordConfirmRegisterField = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: (isLogin) ? loginPage(context) : registerPage(context),
    );
  }

  SingleChildScrollView loginPage(BuildContext context) {
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 40.0),
            child: Image.asset(
              'assets/images/transparent.png',
              width: MediaQuery.of(context).size.width * 0.60,
            ),
          ),
          loginPageTextFormField(
            12.0,
            12.0,
            usernameLoginField,
            false,
            'username',
            Icons.person_2,
            KeyboardType.text,
          ),
          loginPageTextFormField(
            12.0,
            12.0,
            passwordLoginField,
            passwordLoginObscure,
            'password',
            Icons.lock,
            KeyboardType.text,
            (newObscured) {
              setState(() {
                passwordLoginObscure = newObscured;
              });
            },
          ),
          OutlinedButton(
            onPressed: () {},
            child: const Text('Login'),
          ),
          const Divider(
            indent: 30,
            endIndent: 30,
            height: 40,
          ),
          ElevatedButton(
            onPressed: () {
              setState(() {
                isLogin = false;
              });
            },
            child: const Text('Register'),
          )
        ],
      ),
    );
  }

  SingleChildScrollView registerPage(BuildContext context) {
    return SingleChildScrollView(
      physics: const BouncingScrollPhysics(),
      child: Column(
        mainAxisSize: MainAxisSize.max,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 40.0),
            child: Image.asset(
              'assets/images/transparent.png',
              width: MediaQuery.of(context).size.width * 0.60,
            ),
          ),
          loginPageTextFormField(
            4.0,
            8.0,
            usernameRegisterField,
            false,
            'username',
            Icons.person_2,
            KeyboardType.text,
          ),
          loginPageTextFormField(
            4.0,
            8.0,
            emailRegisterField,
            false,
            'email',
            Icons.mail,
            KeyboardType.emailAddress,
          ),
          loginPageTextFormField(
            4.0,
            8.0,
            phoneRegisterField,
            false,
            'phone',
            Icons.phone_android,
            KeyboardType.phone,
          ),
          loginPageTextFormField(
            4.0,
            8.0,
            passwordRegisterField,
            passwordLoginObscure,
            'password',
            Icons.lock,
            KeyboardType.text,
          ),
          loginPageTextFormField(
            4.0,
            8.0,
            passwordConfirmRegisterField,
            true,
            'confirm password',
            Icons.lock,
            KeyboardType.text,
          ),
          OutlinedButton(
            onPressed: () {},
            child: const Text('Register'),
          ),
          const Divider(
            indent: 30,
            endIndent: 30,
            height: 40,
          ),
          ElevatedButton(
              onPressed: () {
                setState(() {
                  isLogin = true;
                });
              },
              child: const Text('Login'))
        ],
      ),
    );
  }
}
